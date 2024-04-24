import React, { useState } from 'react';
import './App.css';

export default function BrowseForm() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');
    const [key, setKey] = useState('');

    const API_URL = 'https://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload';

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
            const response = await fetch(API_URL, {
                method: 'POST',
                body: formData
            });

            setUploading(false);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const result = await response.json();
            setKey(result.key);
            setMessage(`File uploaded successfully. Key: ${result.key}`);
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage(`Failed to upload file. Please try again. Error: ${error.message}`);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen' style={{ backgroundColor: "#0b3050" }}>
            <div className="bg-blue-100 w-80 md:w-auto pb-20 pt-10 px-10 h-auto rounded-lg">
                <p className="text-center font-semibold">Teacher Upload Form</p>
                {message && <p className="text-red-500 text-center mt-4">{message}</p>}
                <form onSubmit={handleSubmit} className='grid place-items-center mt-6'>
                    <input type="file" id="file" name="file" accept=".docx" onChange={e => setFile(e.target.files[0])} />
                    <input type="submit" value="Upload Rubric" disabled={uploading} className={`bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer mt-2 ${uploading ? 'opacity-50' : 'opacity-100'}`} />
                </form>
            </div>
        </div>
    );
}

