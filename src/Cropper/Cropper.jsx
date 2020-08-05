import React from "react";
import Cropper from "react-easy-crop";

const CropComponent = ({ crop, setCrop, zoom, setZoom, onCropComplete }) => {
  return (
    <div className="App">
      <div className="crop-container">
        {/* <Cropper
          image="https://upload.wikimedia.org/wikipedia/en/3/3d/Luneos-logo-1024.png"
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          cropSize={{ width: 380, height: 380 }}
          onMediaLoaded={mediaSize => console.log("size", mediaSize)}
        /> */}
      </div>
    </div>
  );
};

export default CropComponent;
