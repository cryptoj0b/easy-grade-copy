import './App.css';
import grayImage from './Grayscale_Transparent_NoBuffer.png';
import {useState} from 'react';
export default function BrowseForm(){

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
          console.log('Upload Success:', data.Location);
        }
      });
    }
  };

  return (
    <div className='flex justify-center items-center'>
        <div className="bg-blue-100 w-[80%] sm:w-fit pb-40 pt-20 md:20 px-20 md:10 h-[570px] sm:h-1/2 justify-center items-center rounded-lg " id="dropArea" onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}>
          <img src={grayImage} className='object-cover w-96 md:4 justify-center opacity-50 block'></img>
        <ul className='mt-6 list-disc'>
          <li className='list-item'>
          <li>Browse & select OR drag & drop your file.</li>
          <li>Click on submit file.</li>
          <li>Your file will be done and sent to your tutor.</li>
         </ul>
                <form onSubmit={handleSubmit} className='grid place-items-center mt-6'>
                    <input type="file" id="file" name="file" accept=".docx" onChange={e => setFile(e.target.files[0])} />
                    <input type="submit" value="Submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white cursor-pointer mt-2' />
                </form>
            </div>
        </div>
    );
}
