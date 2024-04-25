import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const filteredFiles = files.filter(file => {
      return file.name.match(/\.(docx|txt)$/);
    });
    setUploadedFiles([...uploadedFiles, ...filteredFiles]);
    filteredFiles.forEach(file => {
      uploadFile(file);
    });
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://ylj9agi7la.execute-api.eu-north-1.amazonaws.com/prod/teacher-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle success
      console.log(response.data);
    }).catch(error => {
      // handle error
      console.log(error);
    });
  };

  return (
    <div className="file-upload-container">
      <div className="drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="icon"></div>
        <p>Drag and Drop file or <button>Browse</button></p>
      </div>
      <ul className="file-list">
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            <span className="file-name">{file.name}</span>
            <span className="file-size">{(file.size / 1024).toFixed(2)} KB</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
