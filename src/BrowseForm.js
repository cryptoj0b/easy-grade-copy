import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';
import { useState } from 'react';
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  region: 'eu-north-1', // Specify your AWS region
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-north-1_vyP0c3eU8' 
  })
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'studentupload' } 
});

export default function BrowseForm() {

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.docx')) {
      const uploadParams = {
        Bucket: 'studentupload', 
        Key: file.name, // File name
        Body: file, // File object
        ACL: 'public-read' 
      };

      s3.upload(uploadParams, (err, data) => {
        if (err) {
          console.log('Error uploading file:', err);
        } else {
          console.log('Upload Success', data.Location);
          alert('File uploaded successfully!');
        }
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  document.body.style.backgroundColor = "#0b3050";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.display = "flex";

  return (
    <div className='flex justify-center items-center'>
      <div className="bg-blue-100 w-[80%] sm:w-fit pb-40 pt-20 md:20 px-20 md:10 h-[570px] sm:h-1/2 justify-center items-center rounded-lg " id="dropArea"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}>
        <img src={grayImage} className='object-cover w-96 md:4 justify-center opacity-50 block'></img>
        <ul className='mt-6 list-disc'>
          <li className='list-item'>
            browse & select OR drag & drop your file
          </li>
          <li className='list-item'>
            click on submit file
          </li>
          <li className='list-item'>
            your file will be done and sent to your tutor
          </li>
        </ul>
        <form method='post' className='grid mt-6 -ml-10 sm:-m-0'>
          <input type="file" id="file" name="file" accept=".docx" /><br />
          <input type="submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer' style={{marginTop: "10px"}} />
        </form>
      </div>
    </div>
  );
}
