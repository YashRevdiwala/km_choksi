"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Slider = () => {
  return (
    <>
      <Carousel
        interval={3000}
        centerSlidePercentage={10}
        showIndicators={true}
        centerMode={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        dynamicHeight={false}
        className="bg-[url('/assets/inner_bg.jpg')] h-[300px]"
      >
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/01.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/02.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/03.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/04.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/05.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/06.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/07.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/08.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/09.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/10.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/11.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
        <div className="w-[200px] h-[200px] px-8 mt-16 mb-6">
          <img className="" src="/assets/collection/12.jpg" />
          <p className="bg-white">Gold Coins</p>
        </div>
      </Carousel>
    </>
  )
}

export default Slider
