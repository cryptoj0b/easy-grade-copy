import React, { useState } from 'react';
import './App.css';
import AWS from 'aws-sdk';
import grayImage from './Grayscale_Transparent_NoBuffer.png'; // Ensure this is imported

AWS.config.update({
  region: 'eu-north-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-north-1_vyP0c3eU8'
  })
});

const s3 = new AWS.S3();

function BrowseForm() {
  const handleDrop = async (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].name.endsWith('.docx')) {
      const file = files[0];
      const uploadParams = {
        Bucket: 'studentupload',
        Key: file.name,
        Body: file,
        ACL: 'public-read'
      };

      try {
        const data = await s3.upload(uploadParams).promise();
        console.log('Upload Success:', data.Location);
      } catch (err) {
        console.log('Error uploading file:', err);
      }
    } else {
      alert('Please drop a .docx file.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-blue-50'>
      <div className="bg-blue-100 w-3/4 md:w-1/2 p-10 h-auto rounded-lg" id="dropArea"
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; }}
        onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); }}>
        <img src={grayImage} alt="Placeholder" className='w-full opacity-50 mb-4' />
        <ul className='list-disc pl-5 space-y-2'>
          <li>Browse & select OR drag & drop your file.</li>
          <li>Click on submit file.</li>
          <li>Your file will be done and sent to your tutor.</li>
        </ul>
        <input type="file" accept=".docx" className='mt-4' />
        <button className='mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded cursor-pointer'>Submit</button>
      </div>
    </div>
  );
}

export default BrowseForm;
