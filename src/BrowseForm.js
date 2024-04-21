import React, { useState } from 'react';
import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';

export default function BrowseForm() {
    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false); // Reset drag over state
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.name.endsWith('.docx')) {
            setFile(droppedFile);
            console.log('File dropped:', droppedFile);
import './App.css'; 
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-north-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-north-1_vyP0c3eU8'
  })
});
const s3 = new AWS.S3({
  params: { Bucket: 'studentupload' }
});
function BrowseForm() {
  const handleDrop = async (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].name.endsWith('.docx')) {
      const file = files[0];
      const uploadParams = {
        Bucket: 'studentupload',
        Key: file.name,
        Body: file,
        ACL: 'public-read'
      };
      s3.upload(uploadParams, function(err, data) {
        if (err) {
          console.log('Error:', err);
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
          console.log('Upload Success:', data.Location);
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://kxs4wm7nc2.execute-api.eu-north-1.amazonaws.com/dev/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {  // Check if the request was failed
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const result = await response.json();
            console.log('File uploaded successfully:', result);
            alert(`File ${file.name} has been uploaded successfully.`);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file. Please try again. Error: ' + error.message);
        }
    };
