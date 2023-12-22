import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Kanyadan = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-4 md:my-8 md:py-8  w-screen">
        <div className="flex flex-col text-center md:flex-row gap-2 mx-9">
          <Image
            src="/assets/brands/brand-img.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
          <div className="py-3 my-3 md:px-10 md:py-16 md:my-14 justify-center items-center mx-10">
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
              <Link href="/products">EXPLORE THE COLLECTION</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col text-center md:flex-row gap-2 mx-9 my-8">
          <div className="py-3 my-3 md:px-10 md:py-16 md:my-14 justify-center items-center mx-10 order-last md:order-first">
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
              <Link href="/products">EXPLORE THE COLLECTION</Link>
            </Button>
          </div>
          <Image
            src="/assets/brands/brand-img01.jpg"
            width={700}
            height={200}
            alt="kanyadan-collection"
          />
        </div>
      </div>
    </>
  )
}

export default Kanyadan
