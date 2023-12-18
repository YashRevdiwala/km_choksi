"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Slider = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img className="py-3 my-4" src="/assets/slider/01.jpg" />
        </div>
        <div>
          <img className="py-3 my-4" src="/assets/slider/02.jpg" />
        </div>
        <div>
          <img className="py-3 my-4" src="/assets/slider/03.jpg" />
        </div>
      </Carousel>
    </>
  )
}

export default Slider
