// App.js
import React, { useState } from 'react';

export default function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const API_URL = 'hhttps://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload';

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Content = reader.result.split(',')[1]; // Remove the content type prefix

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ file: base64Content, filename: file.name })
        });

        if (response.ok) {
          setMessage('File uploaded successfully.');
        } else {
          throw new Error('Failed to upload file.');
        }
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    };
    reader.onerror = error => setMessage(`Error: ${error.message}`);
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      <p>{message}</p>
    </div>
  );
}
