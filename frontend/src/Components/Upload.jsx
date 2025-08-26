import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('product', file); // ✅ match backend field name

    try {
      const res = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('✅ Upload success:', res.data);
      alert('Uploaded successfully!');
    } catch (error) {
      console.error('❌ Upload failed:', error);
      alert('Upload failed. Check console for details.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Upload Product Image</h3>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} className="form-control mb-3" />
        {previewUrl && <img src={previewUrl} alt="preview" style={{ width: '200px', marginBottom: '10px' }} />}
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
