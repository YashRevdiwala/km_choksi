import Collection from "./(components)/Collection"
import Header from "./(components)/Header"
import Slider from "./(components)/Slider"
import Products from "./(components)/Products"
import About from "./(components)/About"
import Kanyadan from "./(components)/Kanyadan"
import Image from "next/image"
import Featured from "./(components)/Featured"
import Footer from "./(components)/Footer"
import ScrollTop from "./(components)/ScrollToTop"

const Home = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      <Slider className="hidden" />
      <Collection />
      <hr className="hidden lg:w-[1450px] lg:mx-auto lg:my-4" />
      <Products />
      <About />
      <hr className="w-screen md:w-[1600px] my-6" />
      <Kanyadan />
      <div className="flex md:px-5 md:py-4 md:mx-6 justify-center items-center w-screen px-3">
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
