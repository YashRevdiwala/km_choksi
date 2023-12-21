import Collection from "./components/Collection"
import Header from "./components/Header"
import Slider from "./components/Slider"
import Products from "./components/Products"
import About from "./components/About"
import Kanyadan from "./components/Kanyadan"
import Image from "next/image"
import Featured from "./components/Featured"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Collection />
      <hr className="w-[1450px] mx-auto my-4" />
      <Products />
      <About />
      <hr className="w-[1600px] my-6" />
      <Kanyadan />
      <div className="flex px-5 py-4 mx-6 justify-center items-center">
        <Image
          src="/assets/bottom-banner.jpg"
          width={1920}
          height={800}
          alt="bottom-banner"
          className=""
        />
      </div>
      <Featured />
      <Footer />
    </>
  )
}

export default Home
