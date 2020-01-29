import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel({ images, onLeft, expanded }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '50px'
  };
  const displayStyle = expanded
    ? 'expanded w-100 image-wrapper'
    : 'w-100 image-wrapper';
  return (
    <div
      className={
        onLeft ? `show-prev ${displayStyle}` : `show-next ${displayStyle}`
      }
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div>
            <figure>
              {index == 0 && <div className="teal-overlay"></div>}
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
