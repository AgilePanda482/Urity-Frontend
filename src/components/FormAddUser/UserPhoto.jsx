import React, { useRef, useState } from "react";
import AddPhoto from "../../assets/AddPhoto.svg";
import Orion_camera from "../../assets/Orion_camera.svg";

export default function Foto() {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex justify-center items-center w-32 h-32 bg-black rounded-full cursor-pointer overflow-hidden"
        onClick={handleFileSelect}
      >
        <form action="">
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Selected"
              className="w-auto h-auto object-cover"
            />
          ) : (
            <img src={Orion_camera} alt="Orion_camera" className="w-14 h-14" />
          )}
        </form>
      </div>
    </div>
  );
}
