import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

export default function ImageCarousel({ images }) {
  return (
    <div className="w-100 w-70-ns image-wrapper">
      <div className="teal-overlay"></div>
      <div className="w-100-ns">
        <AwesomeSlider
          cssModule={AwesomeSliderStyles}
          bullets={false}
          organicArrows={true}
        >
          {images.map((image, index) => (
            <div data-src={image.path} key={index} />
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
}
