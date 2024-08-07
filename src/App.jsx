import React, { useState } from "react";
import SocialMedia from "./Components/SocialMedia";
import ImageUploader from "./Components/ImageUploader";
import ImageResizer from "./Components/ImageResizer";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [imgFile, setImgFile] = useState(null);

  const handleSelectedPlatform = (platform) => {
    setSelectedPlatform(platform);
    console.log("Selected platform: ", platform);
  };

  const handleImageUpload = (file) => {
    setImgFile(file);
    console.log("Uploaded file: ", file);
  };

  return (
    <div className="bg-zinc-900 h-screen w-full p-10">
      <div className="flex flex-col gap-5">
        <SocialMedia onSelect={handleSelectedPlatform} />
        <div className="flex gap-10">
          <ImageUploader onImageUpload={handleImageUpload} />
          <ImageResizer imgFile={imgFile} selectedPlatform={selectedPlatform} />
        </div>
      </div>
    </div>
  );
}

export default App;
