import { Carousel } from "react-responsive-carousel"

const Slider = () => {
  return (
    <div className="md:py-16 md:pl-16 ">
      <div className="md:px-5 md:overflow-hidden max-sm:hidden ">
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
