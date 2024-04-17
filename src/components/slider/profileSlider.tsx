'use client'

import React, { useState } from 'react'
import './slider.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProfileSlider = ({data,setisBanner}:{data:any[],setisBanner:any}) => {
   

  return (
    <div className='slider-main'>
        <div className='slider-main-close'><img onClick={()=>setisBanner(false)} src="/images/delete.png" alt="" /></div>
        <div className='slider-main-slider'>
        <Carousel>
        {data?.map((image, index) => {
              const pic =
              process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
              "/" +
              image;
        return  <Carousel.Item key={index}>
            
            <img
              className="d-block"
              src={pic}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
})}
      </Carousel>
        </div>
    </div>
  )
}

export default ProfileSlider