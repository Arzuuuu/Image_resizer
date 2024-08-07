import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";

function ImageResizer({ selectedPlatform, imgFile }) {
  const [resizedImage, setResizedImage] = useState(null);
  const [outputType, setOutputType] = useState("JPEG");

  useEffect(() => {
    const resizeImage = async (file) => {
      const fileType = file.type;
      let outputType = "JPEG";

      if (fileType === "image/png") {
        outputType = "PNG";
      } else if (fileType === "image/webp") {
        outputType = "WEBP";
      }

      setOutputType(outputType);

      try {
        Resizer.imageFileResizer(
          file,
          selectedPlatform.maxWidth, // width
          selectedPlatform.maxHeight, // height
          outputType, // format
          100, // quality
          0, // rotation
          (uri) => {
            setResizedImage(uri);
            console.log("Resized image URI: ", uri);
          },
          "base64"
        );
      } catch (err) {
        console.error("Error resizing image:", err);
      }
    };

    if (selectedPlatform && imgFile) {
      console.log(
        "Selected platform dimensions: ",
        selectedPlatform.maxWidth,
        selectedPlatform.maxHeight
      );
      console.log("Original image file: ", imgFile);
      resizeImage(imgFile);
    } else {
      console.warn("Either no platform selected or no image file provided.");
    }
  }, [imgFile, selectedPlatform]);

  return (
    <div>
      {resizedImage && (
        <div>
          <h2 className="text-white flex my-1">Resized Image:</h2>
          <div className="w-1/2 text-white w-96 h-96  items-center justify-center flex my-4 mb-5 ">
            <img
              src={resizedImage}
              alt="Resized"
              className="bg-green-400 w-[90%] h-[90%]"
            />
          </div>
          <a
            href={resizedImage}
            download={`resized-image.${outputType.toLowerCase()}`}
            className="bg-blue-600 text-white p-2 rounded-md"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
}

export default ImageResizer;
