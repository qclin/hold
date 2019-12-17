import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel({ images, onLeft }) {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    centerPadding: '50px',
    cssEase: 'ease'
  };
  return (
    <div
      className={
        onLeft
          ? 'show-prev w-100 w-60-ns image-wrapper'
          : 'show-next w-100 w-60-ns image-wrapper'
      }
    >
      <div className="teal-overlay"></div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img src={image.path} key={index} />
        ))}
      </Slider>
    </div>
  );
}
