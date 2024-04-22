import React, { useState } from 'react';
import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';

export default function BrowseForm() {
    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const validateFile = (file) => {
        return file && file.name.endsWith('.docx');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false); // Reset drag over state
        const droppedFile = e.dataTransfer.files[0];

        if (validateFile(droppedFile)) {
            setFile(droppedFile);
            setMessage('');
            console.log('File dropped:', droppedFile);
        } else {
            setMessage('Please drop a .docx file.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please upload a .docx file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        setUploading(true);

        try {
            const response = await fetch('https://sxrxorwbp1.execute-api.eu-north-1.amazonaws.com/default/RubricFileUploader', {
                method: 'POST',
                body: formData
            });

            setUploading(false);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('File uploaded successfully:', result);
            setMessage(`File ${file.name} has been uploaded successfully.`);
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage(`Failed to upload file. Please try again. Error: ${error.message}`);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen' style={{ backgroundColor: "#0b3050" }}>
            <div className={`bg-blue-100 w-[80%] md:w-auto pb-40 pt-20 px-20 h-auto rounded-lg ${isDragOver ? 'bg-blue-300' : ''}`}
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false); }}>
                <img src={grayImage} alt="Placeholder" className='object-cover w-96 opacity-50 mx-auto' />
                {message && <p className="text-red-500 text-center mt-4">{message}</p>}
                <ul className='mt-6 list-disc text-center'>
                    <li>Browse & select OR drag & drop your file</li>
                    <li>Click on submit file</li>
                    <li>Your file will be sent to the server</li>
                </ul>
                <form onSubmit={handleSubmit} className='grid place-items-center mt-6'>
                    <input type="file" id="file" name="file" accept=".docx" onChange={e => setFile(e.target.files[0])} />
                    <input type="submit" value="Submit" disabled={uploading} className={`bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer mt-2 ${uploading ? 'opacity-50' : 'opacity-100'}`} />
                </form>
            </div>
        </div>
    );
}
