import React, { useState } from "react";
import CropContainer from "./Cropper/index";
const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};
const App = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  const onImageUpload = e => {
    console.log(e.target.files);
    getBase64(e.target.files[0]);
  };
  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let img = new Image();

      img.onload = () => {
        console.log("width", img.width, "height", img.height); // image is loaded; sizes are available
      };

      img.src = reader.result;
      setUploadedImg(reader.result);

      console.log(reader.result);
      const imgData = reader.result.split(";base64,").pop();
      const fileObj = new File([b64toBlob(imgData)], `1024x1024.png`, {
        type: "image/png"
      });
      console.log("fileObj", fileObj);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  };
  return (
    <>
      <input type="file" onChange={onImageUpload} />
      <img src={uploadedImg} alt="1024 x 1024" />
      <CropContainer />
    </>
  );
};

export default App;
