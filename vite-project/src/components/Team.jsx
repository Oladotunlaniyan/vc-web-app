import React, { useRef, useState } from 'react';
// Import Swiper React components

import img11 from '../assets/images/image11.png'

export default function App() {
  return (
    <div className='team-image'>
      <div className='image-element'>
          <img src={img11} />
      </div>
      <div className='image-element'>
          <img src={img11} />
      </div>
      <div className='image-element'>
          <img src={img11} />
      </div>
      <div className='image-element'>
          <img src={img11} />
      </div>
      <div className='image-element'>
          <img src={img11} />
      </div>
    </div>
  );
}
