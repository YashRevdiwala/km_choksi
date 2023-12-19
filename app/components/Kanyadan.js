import { Button } from "@/components/ui/button"
import { data } from "autoprefixer"
import Image from "next/image"

const Kanyadan = () => {
  const kanyadanCollection = [
    {
      src: "/assets/brands/brand-img.jpg",
      title: "KANYADAN",
      subtitle: "PURE WEDDING COLLECTION",
      desc: "A bespoke collection to shine like no other on your special day",
    },
    {
      src: "/assets/brands/brand-img01.jpg",
      title: "KANYADAN",
      subtitle: "PURE WEDDING COLLECTION",
      desc: "A bespoke collection to shine like no other on your special day",
    },
  ]
  return (
    <>
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
      </div>
    </>
  )
}

export default Kanyadan
