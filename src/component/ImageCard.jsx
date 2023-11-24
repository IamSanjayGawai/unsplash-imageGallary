import { useState } from "react";
import { useSelector } from "react-redux";

function ImageCard({ photo }) {
  const isDarkMode = useSelector((state) => state.imageReducer.isDarkMode);

  return (
    <>
      <div
        className="image-card-container"
        style={{ cursor: "pointer" }}
      >
        <img
          className="w-100 rounded bx-shadow1"
          src={photo.urls.regular}
          alt={photo.alt_description}
          style={{ height: '20rem' }}
        />
      </div>
    </>
  );
}

export default ImageCard;
