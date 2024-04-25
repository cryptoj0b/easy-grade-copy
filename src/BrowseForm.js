import React, { useState } from 'react';
import './App.css'; 

export default function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'https://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload';

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = error => {
      setMessage(`Error: ${error.message}`);
      setIsLoading(false);
    };
  };

  return (
    <div className="app-container">
      <input type="file" accept=".docx" onChange={handleFileChange} disabled={isLoading} />
      <button onClick={handleUpload} disabled={!file || isLoading}>
        {isLoading ? 'Uploading...' : 'Upload File'}
      </button>
      <p className={message.startsWith('Error') ? 'error-message' : 'success-message'}>{message}</p>
    </div>
  );
}

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  input[type="file"] {
    margin: 10px 0;
  }

  button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }

  button:disabled {
    background-color: #ccc;
  }

  .error-message {
    color: red;
  }

  .success-message {
    color: green;
  }
</style>
