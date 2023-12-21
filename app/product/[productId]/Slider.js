import { Carousel } from "react-responsive-carousel"

const Slider = () => {
  return (
    <div className="py-16 pl-16">
      <div className="px-5 overflow-hidden ">
        <Carousel
          axis="vertical"
          interval={2000}
          dynamicHeight={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover
          autoPlay
          autoFocus
          emulateTouch
          infiniteLoop
        >
          <div className="w-[700px] h-[700px]">
            <img
              src="/assets/product-page-16.jpg"
              alt="Product Image"
              className="w-[700px] h-[700px]"
            />
          </div>
          <div className="w-[700px] h-[700px]">
            <img
              src="/assets/product-page-17.jpg"
              alt="Product Image"
              className="w-[700px] h-[700px]"
            />
          </div>
          <div className="w-[700px] h-[700px]">
            <img
              src="/assets/product-page-18.jpg"
              alt="Product Image"
              className="w-[700px] h-[700px]"
            />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
export default Slider
