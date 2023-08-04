import React, { useState } from "react";
import "./ImageSlider.css";
import image1 from "../../accets/image1.jpg";
import image2 from "../../accets/image2.jpg";
import image3 from "../../accets/image3.jpg";
import image4 from "../../accets/image4.jpeg";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4];

  const handleNextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="image-slider-container">
      <div className="slider-controls">
        <button className="slider-button prev" onClick={handlePrevSlide}>
          &#8249; Previous
        </button>
        <button className="slider-button next" onClick={handleNextSlide}>
          Next &#8250;
        </button>
      </div>
      <div className="slider-wrapper">
        <img
          className="slider-image"
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
        />
      </div>
    </div>
  );
};

export default ImageSlider;

// const images = [
//   "https://c4.wallpaperflare.com/wallpaper/126/117/95/quote-motivational-digital-art-typography-wallpaper-preview.jpg",
//   "https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   "https://images.unsplash.com/photo-1549633030-89d0743bad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];
