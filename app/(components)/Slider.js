"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Slider = () => {
  return (
    <>
      <Carousel
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        showIndicators={false}
      >
        <div>
          <img className="pb-3 mb-4" src="/assets/slider/01.jpg" />
        </div>
        <div>
          <img className="pb-3 mb-4" src="/assets/slider/02.jpg" />
        </div>
        <div>
          <img className="pb-3 mb-4" src="/assets/slider/03.jpg" />
        </div>
      </Carousel>
    </>
  )
}

export default Slider
