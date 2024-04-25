import React, { useState, useCallback } from 'react';

export default function App() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'https://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload';

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    setFiles(e.dataTransfer.files);
    setMessage('');
  }, []);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!files.length) {
      setMessage("Please select or drag and drop a file here first.");
      return;
    }

    setIsLoading(true);
    Array.from(files).forEach(async (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Content = reader.result.split(',')[1];

        try {
          const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ file: base64Content, filename: file.name })
          });

          if (response.ok) {
            setMessage(prev => `${prev}\n${file.name} uploaded successfully.`);
          } else {
            throw new Error(`Failed to upload ${file.name}.`);
          }
        } catch (error) {
          setMessage(prev => `${prev}\nError: ${error.message}`);
        }
      };
      reader.onerror = error => setMessage(prev => `${prev}\nError: ${error.message}`);
    });

    setIsLoading(false);
  };

  return (
    <>
      <div className="upload-area"
           onDragEnter={handleDragEnter}
           onDragOver={handleDragOver}
           onDragLeave={handleDragLeave}
           onDrop={handleDrop}>
        Drag and drop your files here or
        <input type="file" onChange={handleFileChange} multiple style={{ display: 'none' }}/>
        <button onClick={() => document.querySelector('input[type="file"]').click()}>
          Click to select files
        </button>
        <button onClick={handleUpload} disabled={!files.length || isLoading}>
          {isLoading ? 'Uploading...' : 'Upload Files'}
        </button>
        <pre>{message}</pre>
      </div>
      <style jsx>{`
        .upload-area {
          width: 100%;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 20px;
          padding: 20px;
          cursor: pointer;
          border-radius: 10px;
          background-color: #f9f9f9;
          border: ${dragging ? '3px dashed #666' : '3px dashed #ccc'};
        }

        .upload-area:hover {
          background-color: #f1f1f1;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:disabled {
          background-color: #ccc;
        }

        button:hover:not(:disabled) {
          background-color: #45a049;
        }
      `}</style>
    </>
  );
}
