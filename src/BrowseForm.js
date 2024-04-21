import React, { useState } from 'react';
import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';

export default function BrowseForm() {
    const [file, setFile] = useState(null);
    const [key, setKey] = useState('');
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false); // Reset drag over state
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.name.endsWith('.docx')) {
            setFile(droppedFile);
            console.log('File dropped:', droppedFile);
        } else {
            alert('Please drop a .docx file.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please upload a .docx file.');
            return;
        }
        if (!key.trim()) {
            alert('Please enter the key provided by your tutor.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://kxs4wm7nc2.execute-api.eu-north-1.amazonaws.com/dev/upload', {
                method: 'POST',
                body: formData
                // Note: Fetch API does not require Content-Type header for FormData.
                // It automatically sets the Content-Type to multipart/form-data with the correct boundary.
            });
            const result = await response.json();
            console.log('File uploaded successfully:', result);
            alert(`File ${file.name} submitted with key ${key}. Response: ${result.message}`);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file. Please try again.');
        }
    };

    return (
        <div className='flex justify-center items-center h-screen' style={{ backgroundColor: "#0b3050" }}>
            <div className={`bg-blue-100 w-[80%] md:w-auto pb-40 pt-20 px-20 h-auto rounded-lg ${isDragOver ? 'bg-blue-300' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}>
                <img src={grayImage} alt="Placeholder" className='object-cover w-96 opacity-50 mx-auto' />
                <ul className='mt-6 list-disc text-center'>
                    <li>Browse & select OR drag & drop your file</li>
                    <li>Click on submit file</li>
                    <li>Enter the key given by your tutor</li>
                    <li>Your file will be done and sent to your tutor</li>
                </ul>
                <form onSubmit={handleSubmit} className='grid place-items-center mt-6'>
                    <input type="file" id="file" name="file" accept=".docx" onChange={e => setFile(e.target.files[0])} />
                    <input name='key' className='rounded mt-2' value={key} placeholder="Enter key..." onChange={e => setKey(e.target.value)} /><br />
                    <input type="submit" value="Submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer mt-2' />
                </form>
            </div>
        </div>
    );
}
