import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';
import {useState} from 'react';
export default function BrowseForm(){

  const [key, setKey] = useState("");
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.docx')) {
      // Handle the dropped file here, for example, you can set it to state or perform any desired operation
      console.log('File dropped:', file);
    }
  };

  // Function to handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  };

  // Function to handle drag enter
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add any styling if desired
    
  };

  // Function to handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Remove any styling if added
  };

  document.body.style.backgroundColor = "#0b3050";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.display = "flex";

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
          <input name='key' className='rounded mt-2 w-[70px] sm:w-auto' value= {key} placeholder=" enter key..." onChange={e => setKey(e.target.value)}/><br/>
          <input type="submit" className='bg-gradient-to-r from-cyan-500 w-[70px] sm:w-auto to-blue-500 rounded text-white cursor-pointer' style={{marginTop: "10px"}}/>
        </form>
      </div>
      </div>
        </>
    )
}