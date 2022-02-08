import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const ImageUpload = ({ setImage }) => {
  const FileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios.post("/api/post/image/upload", formData).then((response) => {
      console.log(response.data);
      setImage(response.data.filePath);
    });
  };
  return (
    <>
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={FileUpload}
      />
    </>
  );
};

export default ImageUpload;
