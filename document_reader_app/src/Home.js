import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('File selected:', selectedFile.name);
    }
  };

  return (
    <div className="home">
      <h2>Welcome to Document Reader</h2>
      <h4>Please Select a file to upload</h4>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default Home;
