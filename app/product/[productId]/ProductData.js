"use client"

import { Separator } from "@/components/ui/separator"
import Slider from "./Slider"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const ProductData = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen md:space-x-12 space-y-5">
      <div className="md:hidden pt-5  pl-4">
        <img
          src="/assets/product-page-17.jpg"
          alt="Product Image"
          className="w-[360px] "
        />
      </div>
      <div className="md:hidden  pl-4">
        <img
          src="/assets/product-page-18.jpg"
          alt="Product Image"
          className="w-[360px] "
        />
      </div>
      <div className="md:hidden  pl-4">
        <img
          src="/assets/product-page-16.jpg"
          alt="Product Image"
          className="w-[360px] "
        />
      </div>
      <Slider />
      <div className="md:px-12 px-5 py-16">
        <p className="text-3xl">Bold Glint Diamond Ring</p>
        <p className="py-5 md:w-[550px]">
          Celebrate the quirks and nuances of your bond with these couple rings,
          crafted in 22 karat yellow gold! Comes in a set of 2.
        </p>
        <Separator />
        <div className="flex flex-col">
          <div className="flex flex-row py-5 space-x-8">
            <div className="flex flex-col space-y-2">
              <p>Finger Ring:</p>
              <p>Gold Purity:</p>
              <p>Gross Weight:</p>
              <p>Finger Ring:</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Unisex</p>
              <p>22 Karat</p>
              <p>10 Gm</p>
              <p>Yellow gold</p>
            </div>
          </div>
          <Button
            className="my-5 w-[220px] border-rose-700 font-semibold"
            variant="outline"
            asChild
          >
            <Link href="https://wa.me/+919510970230">
              <MessageCircle />
              WHATSAPP INQUIRY
            </Link>
          </Button>
        </div>
        <div>
          <p className="text-xl py-4">Inquiry</p>
          <form action="">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-3">
                <Input
                  type="text"
                  name="form-field"
                  placeholder="Your Name*"
                  required
                />
                <Input
                  type="email"
                  name="form-field"
                  placeholder="Your Email*"
                  required
                />
              </div>
              <div className="flex flex-row space-x-3">
                <Input
                  type="text"
                  name="form-field"
                  placeholder="Mobile No*"
                  required
                />
                <Input type="text" name="form-field" placeholder="Subject" />
              </div>
              <Textarea defaultValue="Message" name="form-field" />
              <Button variant="destructive">SEND NOW</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductData
