import React, { useState } from 'react';
import './App.css';

export default function App() {
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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (validateFile(selectedFile)) {
      setFile(selectedFile);
      setMessage('');
    } else {
      setMessage('Please select a .docx file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select or drop a .docx file.');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://kxs4wm7nc2.execute-api.eu-north-1.amazonaws.com/dev/upload', {
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
    <div className="upload-area" style={{ backgroundColor: "#f9f9f9", border: isDragOver ? '3px dashed #007bff' : '3px dashed #ccc' }}
         onDrop={handleDrop}
         onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
         onDragEnter={(e) => e.preventDefault()}
         onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false); }}>
      <div className="content-area">
        <p>Drag and drop your .docx file here, or</p>
        <input type="file" onChange={handleFileChange} accept=".docx" style={{ display: 'none' }} id="file-input"/>
        <label htmlFor="file-input" className="file-select-btn">Click to select files</label>
        <button onClick={handleSubmit} disabled={!file || uploading} className="upload-btn">
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </div>
      <pre>{message}</pre>
    </div>
  );
}


