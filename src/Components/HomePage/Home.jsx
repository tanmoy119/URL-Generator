import React, { useRef, useState } from "react";
import "./styles/home.css";
import uploadImage from "./assets/upload.png";

const Home = () => {
  //===All React Hooks are here===================

  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  //=================All function Logic is here====

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  //=====PENDING==>handle uploading file remaining where ,ADD location where 
  const handleUpload = (event) => {
    setFiles(event.target.files)

  };

  //=======Only Selected file Name and Size Display here
  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, index) => (
            <ul>
              <li key={index}>{file.name}</li>
              <li key={index}>{file.size}kb</li>
            </ul>
          ))}
        </ul>
        <div className="actions">
          {/* If you click Browser Files two Button will be display CANCEL and UPLOAD if click Cancel button again you can add new image but 
               if click UPLOAD YOUR IMAGE IS upload your particular given location   */}
          <button onClick={() => setFiles(null)}>Cancel</button> &nbsp; &nbsp;
          <button onClick={()=>handleUpload()} type="button">Upload</button>
        </div>
      </div>
    );

  return (
    <>
      <div className="bg">
        {/* Background Image code */}
        <div className="bg1"></div>
        {/* Top Most Heading in Hero Section */}
        <h1>Increase Traffic from Facebook by</h1>
        <br />
        <h2>Turning Your Images into Clickable Social Cards!</h2>
      </div>
      {!files && (
        <div
          className="dropBox"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {/* Drag and Drop Image Uploading here  */}
          <img src={uploadImage} alt="img"/>
          <span>Drag and Drop Files to Upload</span>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          {/* If you click Browser Files two Button will be display CANCEL and UPLOAD if click Cancel button again you can add new image but 
               if click UPLOAD YOUR IMAGE IS upload your particular given location   */}
          <button onClick={() => inputRef.current.click()}>
            Browser Files
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
