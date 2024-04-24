import React, { useState } from 'react';
import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';

export default function BrowseForm() {
  const [key, setKey] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const API_URL = 'https://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload';

  const handleFileChange = (e) => {
    processFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.docx')) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    console.log('Processing file:', file.name);
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Content = reader.result.split(',')[1]; // Remove the content type prefix
      uploadFile(base64Content, file.name);
    };
    reader.onerror = () => {
      setMessage('Error reading file.');
    };
    reader.readAsDataURL(file);
  };

  const uploadFile = async (base64Content, filename) => {
    setUploading(true);
    setMessage('Uploading file...');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64Content, filename: filename })
      });

      setUploading(false);
      if (response.ok) {
        const result = await response.json();
        setMessage('File uploaded successfully: ' + result.key);
      } else {
        throw new Error('Failed to upload file.');
      }
    } catch (error) {
      setMessage(`Upload failed: ${error.message}`);
      setUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy'; // Show the copy icon when dragging over
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className="bg-blue-100 w-[80%] sm:w-auto md:fit pb-40 pt-20 px-20 h-auto rounded-lg"
             id="dropArea" onDrop={handleDrop} onDragOver={handleDragOver}
             onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>
          <img src={grayImage} alt="Drop file here" className='object-cover w-96 opacity-50 justify-center'/>
          <ul className='mt-6 list-disc text-right'>
            <li>تصفح واختر المستند او ضع ملفك في الصفحة</li>
            <li>انقر على تقديم الملف</li>
            <li>أدخل المفتاح الذي أعطاه لك معلمك</li>
            <li>سيتم تصحيح ملفك وإرساله إلى معلمك</li>
          </ul>

          {message && <p className="text-red-500 text-center mt-4">{message}</p>}

          <form method='post' className='grid place-items-center mt-6'>
            <input type="file" id="file" name="file" accept=".docx" onChange={handleFileChange} />
            <input type="text" name='key' className='rounded mt-2'
                   placeholder="أدخل الرمز..." value={key} onChange={e => setKey(e.target.value)} />
            <input type="submit" value="Upload Rubric" disabled={uploading}
                   className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer mt-2' />
          </form>
        </div>
      </div>
    </>
  );
}
