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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f8ff' }}>
      <div style={{ backgroundColor: '#b0c4de', width: '75%', padding: '40px', borderRadius: '8px', overflow: 'hidden' }}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; }}
        onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); }}>
        <img src="path_to_your_image.png" alt="Placeholder" style={{ width: '100%', opacity: '0.5', marginBottom: '16px' }} />
        <ul style={{ paddingLeft: '20px', margin: '0 0 20px 0', listStyleType: 'disc' }}>
          <li>Browse & select OR drag & drop your file.</li>
          <li>Click on submit file.</li>
          <li>Your file will be done and sent to your tutor.</li>
        </ul>
        <input type="file" accept=".docx" style={{ marginTop: '16px' }} />
        <button style={{ marginTop: '16px', background: 'linear-gradient(to right, #06b6d4, #3182ce)', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
      </div>
    </div>
  );
}

export default BrowseForm;
