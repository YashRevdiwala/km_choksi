"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Content = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row gap-8 mx-9 pb-8"
        >
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/brands/brand-img.jpg"
              width={700}
              height={200}
              alt="kanyadan-collection"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:px-10 md:py-16 md:my-14 justify-center items-center text-center md:mx-10"
          >
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
          </motion.div>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 mx-9 py-8 md:my-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="px-10 md:py-16 md:my-14 justify-center items-center text-center md:mx-10 order-last md:order-first"
          >
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
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/brands/brand-img01.jpg"
              width={700}
              height={200}
              alt="kanyadan-collection"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 pt-8 mx-9">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/brands/brand-img.jpg"
              width={700}
              height={200}
              alt="kanyadan-collection"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="px-10 md:py-16 md:my-14 justify-center items-center text-center md:mx-10"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Content
