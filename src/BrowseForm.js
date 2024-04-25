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
        <button onClick={() => document.querySelector('input[type="file"]').click()} className="file-select-btn">
          Click to select files
        </button>
        <input type="file" onChange={handleFileChange} multiple style={{ display: 'none' }}/>
        <button onClick={handleUpload} disabled={!files.length || isLoading} className="upload-btn">
          {isLoading ? 'Uploading...' : 'Upload Files'}
        </button>
        <pre>{message}</pre>
      </div>
      <style jsx>{`
        .upload-area {
          width: 80%;
          max-width: 600px;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 20px auto;
          padding: 20px;
          cursor: pointer;
          border-radius: 10px;
          background-color: #f9f9f9;
          border: ${dragging ? '3px dashed #007bff' : '3px dashed #ccc'};
          transition: border 0.3s ease;
        }

        .upload-area:hover {
          border-color: #007bff;
        }

        .file-select-btn, .upload-btn {
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .upload-btn:disabled {
          background-color: #ccc;
        }

        .upload-btn:hover:not(:disabled), .file-select-btn:hover {
          background-color: #45a049;
        }

        pre {
          white-space: pre-wrap;
          text-align: center;
          color: #333;
        }
      `}</style>
    </>
  );
}
