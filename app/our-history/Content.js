import Image from "next/image"

const Content = () => {
  return (
    <div className="py-6">
      <div className="bg-[url('/assets//inner_bg.jpg')] w-screen h-96 flex ">
        <div className="py-32 pl-12 absolute">
          <div className=" bg-white h-28 w-96 bg-contain">
            <p className="text-4xl px-12 pt-8 text-rose-700">Our History</p>
            <p className="px-12">The Wedding Jewellery</p>
          </div>
        </div>
        <Image
          src="/assets/brands/banner.jpg"
          width={2560}
          height={1440}
          alt="brand-banner"
          className="h-96 w-full pr-16 pl-64 flex justify-center pt-8 pb-8 "
        />
      </div>

      <div className="flex flex-col gap-4 my-8 py-8">
        <div className=" flex flex-row my-4 gap-4 px-9">
          <Image
            src="/assets/about/about01.jpg"
            width={350}
            height={600}
            alt="about"
            className="px-2"
          />
          <Image
            src="/assets/about/about02.jpg"
            width={350}
            height={600}
            alt="about"
            className="mx-4"
          />
          <div className="pt-14">
            <div className="pl-14 py-11 ml-14 w-[600px] bg-[#FAE7E4]">
              <p className="text-3xl font-bold">About us</p>
              <p className="py-3 my-3">
                Building a legacy brand in the jewellery business is a lifelong
                pursuit. It requires a deeply conscious understanding of your
                customer and their needs; boudndless creativity to craft ideas
                into tangible, joyful products and experiences; and a spirit of
                inclusion that inspires and empowers everyone along on the path.
                We now introduce you to our management board that leads k m
                choksi jewellers, with clarity of purpose and ambition to power
                ahead.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 mx-9 my-8">
          <div className="px-10 py-16 my-14 justify-center items-center mx-10">
            <p className="font-bold text-4xl">Ashvinkumar Kesharimal Shah</p>
            <p className="py-4 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              officia, commodi porro consequatur suscipit tempora asperiores
              dolore voluptate doloremque excepturi molestias. Hic quas possimus
              dolorum est unde molestiae suscipit blanditiis quibusdam tempora
              iure, dignissimos voluptatibus perferendis temporibus veritatis ea
              eum reiciendis, nostrum delectus! Reiciendis ipsam unde voluptatem
              fuga vitae incidunt!
            </p>
          </div>
          <Image
            src="/assets/about/ceo_kmchoksi01.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
        </div>
        <div className="flex flex-row gap-8 mx-9">
          <Image
            src="/assets/about/ceo_kmchoksi02.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
          <div className="px-10 py-16 my-14 justify-center items-center mx-10">
            <p className="font-bold text-4xl">Sheelaben Ashwinkumar Shah</p>
            <p className="py-4 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              officia, commodi porro consequatur suscipit tempora asperiores
              dolore voluptate doloremque excepturi molestias. Hic quas possimus
              dolorum est unde molestiae suscipit blanditiis quibusdam tempora
              iure, dignissimos voluptatibus perferendis temporibus veritatis ea
              eum reiciendis, nostrum delectus! Reiciendis ipsam unde voluptatem
              fuga vitae incidunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
