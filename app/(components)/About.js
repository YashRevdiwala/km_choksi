"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const About = () => {
  const brands = [
    { id: "1", src: "/assets/brands/brand-1.jpg" },
    { id: "2", src: "/assets/brands/brand-2.jpg" },
    { id: "3", src: "/assets/brands/brand-1.jpg" },
    { id: "4", src: "/assets/brands/brand-2.jpg" },
    { id: "5", src: "/assets/brands/brand-1.jpg" },
    { id: "6", src: "/assets/brands/brand-2.jpg" },
  ]
  return (
    <div className="my-6 py-6 w-screen px-3 mx-3">
      <div className="py-4 my-4 text-3xl md:text-center">
        <p className="text-red-700">story of</p>
        <p className="mt-3">K M CHOKSI JEWELLERS</p>
      </div>
      <div className=" flex md:flex-row flex-col md:my-4 md:gap-4 ">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/about/about01.jpg"
            width={350}
            height={600}
            alt="about"
            className="px-2 hidden md:block"
          />
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/about/about02.jpg"
            width={350}
            height={600}
            alt="about"
            className="px-2 hidden md:block"
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:pl-14 md:pt-14 pt-2 md:ml-14 md:w-[450px] w-[350px]"
        >
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
            asChild
          >
            <Link href="/our-history">About us</Link>
          </Button>
        </motion.div>
        <div className="flex flex-row md:hidden w-auto py-10 justify-start space-x-2">
          <Image
            src="/assets/about/about01.jpg"
            width={170}
            height={300}
            alt="about"
            className=""
          />
          <Image
            src="/assets/about/about02.jpg"
            width={170}
            height={300}
            alt="about"
            className=""
          />
        </div>
      </div>
      <div className="mt-12 pt-12 md:flex grid grid-cols-2 md:flex-row justify-center gap-4">
        {brands.map((brand) => (
          <Image
            key={brand.id}
            src={brand.src}
            width={250}
            height={250}
            alt="brand-logo"
            className="rounded-md w-auto h-auto"
          />
        ))}
      </div>
    </div>
  )
}

export default About
