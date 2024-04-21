import React from 'react';
import './App.css';

AWS.config.update({
  region: 'eu-north-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-north-1_vyP0c3eU8'
  })
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
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
     <div className='flex justify-center items-center h-screen' style={{ backgroundColor: "#0b3050" }}>
            <div className={`bg-blue-100 w-[80%] md:w-auto pb-40 pt-20 px-20 h-auto rounded-lg ${isDragOver ? 'bg-blue-300' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}>
                <img src={grayImage} alt="Placeholder" className='object-cover w-96 opacity-50 mx-auto' />
                <ul className='mt-6 list-disc text-center'>
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
