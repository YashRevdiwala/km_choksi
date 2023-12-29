import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Content = () => {
  return (
    <div className="pb-6 w-screen">
      <div className="bg-[url('/assets//inner_bg.jpg')] w-screen h-[150px] md:h-96 flex ">
        <div className="md:py-32 md:pl-12 md:absolute flex justify-center my-auto">
          <div className="text-center md:text-left bg-white h-28 w-[360px] ml-4 md:mx-8 md:w-96 bg-contain">
            <p className="text-4xl md:px-12 md:pt-8 pt-4 text-rose-700">
              Our Brands
            </p>
            <p className="md:px-12">The Wedding Jewellery</p>
          </div>
        </div>
        <Image
          src="/assets/brands/banner.jpg"
          width={2560}
          height={1440}
          alt="brand-banner"
          className="md:h-96 md:w-full md:pr-16 md:pl-64 md:flex md:justify-center md:pt-8 md:pb-8 hidden"
        />
      </div>

      <div className="flex flex-col gap-4 my-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 mx-9 pb-8">
          <Image
            src="/assets/brands/brand-img.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
          <div className="md:px-10 md:py-16 md:my-14 justify-center items-center text-center md:mx-10">
            <p className="font-bold text-4xl">KANYADAN</p>
            <p className="text-2xl">PURE WEDDING COLLECTION</p>
            <p className="py-4 my-4">
              A bespoke collection to shine like no other on your special day
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-black hover:text-white border border-black"
              asChild
            >
              <Link href={`/products`}>EXPLORE THE COLLECTION</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mx-9 py-8 md:my-8">
          <div className="px-10 md:py-16 md:my-14 justify-center items-center text-center md:mx-10 order-last md:order-first">
            <p className="font-bold text-4xl">KANYADAN</p>
            <p className="text-2xl">PURE WEDDING COLLECTION</p>
            <p className="py-4 my-4">
              A bespoke collection to shine like no other on your special day
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-black hover:text-white border border-black"
              asChild
            >
              <Link href={`/products`}>EXPLORE THE COLLECTION</Link>
            </Button>
          </div>
          <Image
            src="/assets/brands/brand-img01.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 pt-8 mx-9">
          <Image
            src="/assets/brands/brand-img.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
          <div className="px-10 md:py-16 md:my-14 justify-center items-center text-center md:mx-10">
            <p className="font-bold text-4xl">KANYADAN</p>
            <p className="text-2xl">PURE WEDDING COLLECTION</p>
            <p className="py-4 my-4">
              A bespoke collection to shine like no other on your special day
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-black hover:text-white border border-black"
              asChild
            >
              <Link href={`/products`}>EXPLORE THE COLLECTION</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
