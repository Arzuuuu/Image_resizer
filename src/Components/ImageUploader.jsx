import React, { useState } from "react";

function ImageUploader({ onImageUpload }) {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const fileURL = URL.createObjectURL(uploadedFile);
      setFile(uploadedFile);
      setFileURL(fileURL);
    }
  };

  const handleResizeClick = () => {
    if (file) {
      onImageUpload(file);
      console.log("Uploaded file: ", file);
    } else {
      console.warn("No file selected for resizing.");
    }
  };

  return (
    <div>
      <input
        className="rounded-md text-white"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      /> 
      <button onClick={handleResizeClick} className="bg-blue-600 text-white p-2 rounded-md">
        Resize
      </button>
      <div className="w-1/2 text-white w-96 h-96  items-center justify-center flex my-4 mb-5">
      {/* <div className="bg-green-400 w-[90%] h-[90%]">HELLO</div> */}
        {fileURL && <img src={fileURL} alt="uploaded-img" className="bg-green-400 w-[90%] h-[90%]" />}
      </div>
      
    </div>
  );
}

export default ImageUploader;
