import { Button } from "@/components/ui/button"
import Image from "next/image"

const Content = () => {
  return (
    <div className="pb-6">
      <div className="bg-[url('/assets//inner_bg.jpg')] w-screen h-96 flex ">
        <div className="py-32 pl-12 absolute">
          <div className=" bg-white h-28 w-96 bg-contain">
            <p className="text-4xl px-12 pt-8 text-rose-700">Our Brands</p>
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
        <div className="flex flex-row gap-8 mx-9">
          <Image
            src="/assets/brands/brand-img.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
          <div className="px-10 py-16 my-14 justify-center items-center mx-10">
            <p className="font-bold text-4xl">KANYADAN</p>
            <p className="text-2xl">PURE WEDDING COLLECTION</p>
            <p className="py-4 my-4">
              A bespoke collection to shine like no other on your special day
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-black hover:text-white border border-black"
            >
              EXPLORE THE COLLECTION
            </Button>
          </div>
        </div>
        <div className="flex flex-row gap-8 mx-9 my-8">
          <div className="px-10 py-16 my-14 justify-center items-center mx-10">
            <p className="font-bold text-4xl">KANYADAN</p>
            <p className="text-2xl">PURE WEDDING COLLECTION</p>
            <p className="py-4 my-4">
              A bespoke collection to shine like no other on your special day
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-black hover:text-white border border-black"
            >
              EXPLORE THE COLLECTION
            </Button>
          </div>
          <Image
            src="/assets/brands/brand-img01.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
        </div>
        <div className="flex flex-row gap-8 mx-9">
          <Image
            src="/assets/brands/brand-img.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
          <div className="px-10 py-16 my-14 justify-center items-center mx-10">
            <p className="font-bold text-4xl">KANYADAN</p>
            <p className="text-2xl">PURE WEDDING COLLECTION</p>
            <p className="py-4 my-4">
              A bespoke collection to shine like no other on your special day
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-black hover:text-white border border-black"
            >
              EXPLORE THE COLLECTION
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
