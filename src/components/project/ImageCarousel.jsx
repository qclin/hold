import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel({ images, onLeft }) {
  const settings = {
    infinite: true,
    speed: 1000,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '50px'
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
          <div>
            <figure>
              <img src={image.path} key={index} />
            </figure>
            <figcaption className="caption">
              <img src="/icons/caption-arrow.svg" />
              {image.name}
            </figcaption>
          </div>
        ))}
      </Slider>
    </div>
  );
}
