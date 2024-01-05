"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Kanyadan = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-4 md:my-8 md:py-8 w-screen">
        <div className="flex flex-col text-center md:flex-row gap-2 mx-9">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
            className="py-3 my-3 md:px-10 md:py-16 md:my-14 justify-center items-center mx-10"
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
              <Link href="/products">EXPLORE THE COLLECTION</Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex flex-col text-center md:flex-row gap-2 mx-9 my-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="py-3 my-3 md:px-10 md:py-16 md:my-14 justify-center items-center mx-10 order-last md:order-first"
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
              <Link href="/products">EXPLORE THE COLLECTION</Link>
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
      </div>
    </>
  )
}

export default Kanyadan
