import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"

export const Services = () => {
  return (
    <div>
        <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} 
        showIndicators={false} showThumbs={false}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Peer-Peer Support</p>
            </div>
        </Carousel>
    </div>
  )
}