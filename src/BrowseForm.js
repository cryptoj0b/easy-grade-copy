import React, { useState } from 'react';

export default function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state to track loading status

  const API_URL = 'https://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload';

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage(''); // Clear previous messages when a new file is selected
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    setIsLoading(true); // Start loading
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
        setIsLoading(false); // End loading
      }
    };
    reader.onerror = error => {
      setMessage(`Error: ${error.message}`);
      setIsLoading(false); // End loading on error
    };
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileChange} disabled={isLoading} />
      <button onClick={handleUpload} disabled={!file || isLoading}>
        {isLoading ? 'Uploading...' : 'Upload File'}
      </button>
      <p>{message}</p>
    </div>
  );
}
button, input[type="file"] {
  margin: 10px;
  padding: 8px;
  font-size: 16px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: default;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}
