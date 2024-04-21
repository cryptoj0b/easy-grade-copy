import React, { useState } from 'react';
import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';
import {useState} from 'react';
export default function BrowseForm(){

export default function BrowseForm() {
    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
  const [key, setKey] = useState("");
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false); // Reset drag over state
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.name.endsWith('.docx')) {
            setFile(droppedFile);
            console.log('File dropped:', droppedFile);
        } else {
            alert('Please drop a .docx file.');
        }
    };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.docx')) {
      // Handle the dropped file here, for example, you can set it to state or perform any desired operation
      console.log('File dropped:', file);
    }
  };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
  // Function to handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  };

    const handleDragEnter = (e) => {
        e.preventDefault();
    };
  // Function to handle drag enter
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add any styling if desired

  };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };
  // Function to handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Remove any styling if added
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please upload a .docx file.');
            return;
        }
  document.body.style.backgroundColor = "#0b3050";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.display = "flex";

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

    return (
        <div className='flex justify-center items-center h-screen' style={{ backgroundColor: "#0b3050" }}>
            <div className={`bg-blue-100 w-[80%] md:w-auto pb-40 pt-20 px-20 h-auto rounded-lg ${isDragOver ? 'bg-blue-300' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}>
                <img src={grayImage} alt="Placeholder" className='object-cover w-96 opacity-50 mx-auto' />
                <ul className='mt-6 list-disc text-center'>
                    <li>Browse & select OR drag & drop your file</li>
                    <li>Click on submit file</li>
                    <li>Your file will be sent to the server</li>
                </ul>
                <form onSubmit={handleSubmit} className='grid place-items-center mt-6'>
                    <input type="file" id="file" name="file" accept=".docx" onChange={e => setFile(e.target.files[0])} />
                    <input type="submit" value="Submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer mt-2' />
                </form>
            </div>
        </div>
    );
    return(
        <>
        {/* this is for design and drag & drop feature, leave it be...*/}
        <div className='flex justify-center items-center'>
        <div className="bg-blue-100 w-[80%] sm:w-fit pb-40 pt-20 md:20 px-20 md:10 h-[570px] sm:h-1/2 justify-center items-center rounded-lg " id="dropArea" onDrop={handleDrop}
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
            enter the key given by your tutor
          </li>
          <li className='list-item'>
            your file will be done and sent to your tutor
          </li>
        </ul>
        {/* Here's your business, change whatever that isn't part of the design, change the design and bad things are gonna happen. it won't be cinematic. */}
        <form method='post' className='grid mt-6 -ml-10 sm:-m-0' >
          <input type="file" id="file" name="file" accept=".docx" /> {/* btw you can add file types we'd need in the accept parameter there */}
          {/* this key thing majing is for the auto-made key for each assignment made from the tutor, 
          sent to his students, so that when they enter their file it only gets submitted to the tutor */}
          <input name='key' className='rounded mt-2' value= {key} placeholder=" enter key..." onChange={e => setKey(e.target.value)}/><br/>
          <input type="submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer' style={{marginTop: "10px"}}/>
        </form>
      </div>
      </div>
        </>
    )
}
