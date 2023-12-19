"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const About = () => {
  const brands = [
    { id: "1", src: "/assets/brands/brand-1.jpg" },
    { id: "2", src: "/assets/brands/brand-2.jpg" },
    { id: "3", src: "/assets/brands/brand-1.jpg" },
    { id: "4", src: "/assets/brands/brand-2.jpg" },
    { id: "5", src: "/assets/brands/brand-1.jpg" },
  ]
  return (
    <div className="my-6 py-6">
      <div className="py-4 my-4 text-3xl text-center">
        <p className="text-red-700">story of</p>
        <p className="mt-3">K M CHOKSI JEWELLERS</p>
      </div>
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
        <div className="pl-14 pt-14 ml-14 w-[450px]">
          <p className="text-3xl font-bold">About us</p>
          <p className="py-3 my-3">
            Building a legacy brand in the jewellery business is a lifelong
            pursuit. It requires a deeply conscious understanding of your
            customer and their needs; boudndless creativity to craft ideas into
            tangible, joyful products and experiences; and a spirit of inclusion
            that inspires and empowers everyone along on the path. We now
            introduce you to our management board that leads k m choksi
            jewellers, with clarity of purpose and ambition to power ahead.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="hover:bg-black hover:text-white border border-black"
          >
            About us
          </Button>
        </div>
      </div>
      <div className="mt-12 pt-12 flex flex-row justify-center gap-4">
        {brands.map((brand) => (
          <Image
            src={brand.src}
            width={250}
            height={250}
            alt="brand-logo"
            className="rounded-md"
          />
        ))}
      </div>
    </div>
  )
}

export default About
