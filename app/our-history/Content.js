"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Content = () => {
  return (
    <div className="pb-6 w-screen">
      <div className="bg-[url('/assets//inner_bg.jpg')] w-screen h-[150px] md:h-96 flex ">
        <div className="md:py-32 md:pl-12 md:absolute flex justify-center my-auto">
          <div className="text-center md:text-left bg-white h-28 w-[360px] ml-4 md:mx-8 md:w-96 bg-contain">
            <p className=" text-4xl md:px-12 md:pt-8 pt-4 text-rose-700">
              Our History
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

      <div className="flex flex-col gap-4 py-8 w-screen md:my-8 md:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className=" flex flex-col md:flex-row md:my-4 md:gap-4 md:px-9"
        >
          <div className="flex justify-center">
            <motion.div
              initial={{ x: -350 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/about/about01.jpg"
                width={350}
                height={600}
                alt="about"
                className="px-2 md:w-[350px] md:h-[600px] w-[170px] h-[270px]"
              />
            </motion.div>
            <motion.div
              initial={{ x: -700 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/about/about02.jpg"
                width={350}
                height={600}
                alt="about"
                className="mx-4 md:w-[350px] md:h-[600px] w-[170px] h-[270px]"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 700 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="pt-14"
          >
            <div className="px-8 mx-4  md:pl-14 py-11 md:ml-14 w-[360px] md:w-[600px] bg-[#FAE7E4]">
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
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row gap-8 mx-9 my-8"
        >
          <motion.div
            initial={{ x: -700 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:px-10 md:py-16 md:my-14 md:justify-center md:items-center md:mx-10 order-last md:order-first "
          >
            <p className="font-bold text-4xl">Ashvinkumar Kesharimal Shah</p>
            <p className="py-4 my-4 md:w-[600px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              officia, commodi porro consequatur suscipit tempora asperiores
              dolore voluptate doloremque excepturi molestias. Hic quas possimus
              dolorum est unde molestiae suscipit blanditiis quibusdam tempora
              iure, dignissimos voluptatibus perferendis temporibus veritatis ea
              eum reiciendis, nostrum delectus! Reiciendis ipsam unde voluptatem
              fuga vitae incidunt!
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 600 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/about/ceo_kmchoksi01.jpg"
              width={700}
              height={200}
              alt="kanyadan-collection"
            />
          </motion.div>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 mx-9">
          <motion.div
            initial={{ x: -700 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/about/ceo_kmchoksi02.jpg"
              width={700}
              height={200}
              alt="kanyadan-collection"
            />
          </motion.div>
          <motion.div
            initial={{ x: 700 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:px-10 md:py-16 md:my-14 md:justify-center md:items-center md:mx-10"
            viewport={{ once: true }}
          >
            <p className="font-bold text-4xl">Sheelaben Ashwinkumar Shah</p>
            <p className="py-4 my-4 md:w-[600px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              officia, commodi porro consequatur suscipit tempora asperiores
              dolore voluptate doloremque excepturi molestias. Hic quas possimus
              dolorum est unde molestiae suscipit blanditiis quibusdam tempora
              iure, dignissimos voluptatibus perferendis temporibus veritatis ea
              eum reiciendis, nostrum delectus! Reiciendis ipsam unde voluptatem
              fuga vitae incidunt!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Content
