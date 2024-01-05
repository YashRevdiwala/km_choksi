"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

const CollectionList = ({ data, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: i * 0.25, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="p-6 "
    >
      <Card className="">
        <Image src={data.src} width={500} height={500} alt="Our Collection" />
        <p className="text-center text-lg my-4">{data.title}</p>
      </Card>
    </motion.div>
  )
}

export default CollectionList
