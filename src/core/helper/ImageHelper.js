import React from "react";
import { API } from "../../backendconnect";
import img from '../images/image.jpg';

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : img;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "70%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
