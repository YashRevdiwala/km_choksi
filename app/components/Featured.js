const Featured = () => {
  return (
    <div className="pt-8 mt-8 text-center w-screen">
      <div className="text-3xl">
        <p>WATCH OUR VIDEO</p>
      </div>
      <div className="md:py-6 md:my-6 grid grid-cols-2 py-16 px-5 md:flex md:flex-row md:gap-8 md:justify-center md:items-center">
        <video
          muted
          autoPlay
          loop
          className="w-48 h-[300px] md:h-full md:w-[320px] pt-3"
        >
          <source src="/assets/video/v0.mp4" />
        </video>
        <video
          muted
          autoPlay
          loop
          className="w-48 h-[300px] md:h-full md:w-[320px] pt-3"
        >
          <source src="/assets/video/v01.mp4" />
        </video>
        <video
          muted
          autoPlay
          loop
          className="w-48 h-[300px] md:h-full md:w-[320px] pt-3"
        >
          <source src="/assets/video/v02.mp4" />
        </video>
        <video
          muted
          autoPlay
          loop
          className="w-48 h-[300px] md:h-full md:w-[320px] pt-3"
        >
          <source src="/assets/video/v03.mp4" />
        </video>
      </div>
      <div className="bg-[#F6F4F2]">
        <p className="pt-8 mt-8 text-lg">Follow us on Instagram</p>
        <p className="text-3xl">k_m_ choksi_official</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 justify-center items-center px-4 mx-4 pt-10 mt-10 pb-16">
          <img
            src="/assets/insta/01.jpg"
            className="md:h-max h-40 w-max my-3 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/02.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/03.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/04.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/05.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/06.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/07.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
          <img
            src="/assets/insta/08.jpg"
            className="md:h-max h-40 w-max my-4 px-0 mx-0"
            alt="ig-post"
          />
        </div>
      </div>
    </div>
  )
}

export default Featured
