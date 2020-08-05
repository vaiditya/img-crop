import React, { useState, useCallback } from "react";
import CropComponent from "./Cropper";

const CropContainer = () => {
  const [crop, setCrop] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  return (
    <CropComponent
      crop={crop}
      setCrop={setCrop}
      zoom={zoom}
      setZoom={setZoom}
      onCropComplete={onCropComplete}
    />
  );
};

export default CropContainer;
