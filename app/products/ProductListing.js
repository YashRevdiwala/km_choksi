"use client"

import { Separator } from "@/components/ui/separator"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutList } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import Slider from "./Slider"
import Link from "next/link"

const montserrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
})

const ProductListing = () => {
  const collectionList = [
    {
      title: "Gold Coins",
      src: "/assets/collection/01.jpg",
    },
    {
      title: "Earrings",
      src: "/assets/collection/02.jpg",
    },
    {
      title: "Pendants",
      src: "/assets/collection/03.jpg",
    },
    {
      title: "Finger Rings",
      src: "/assets/collection/04.jpg",
    },
    {
      title: "Mangalsutras",
      src: "/assets/collection/05.jpg",
    },
    {
      title: "Neckwear",
      src: "/assets/collection/06.jpg",
    },
    {
      title: "Wedding Rings",
      src: "/assets/collection/07.jpg",
    },
    {
      title: "Chains",
      src: "/assets/collection/08.jpg",
    },
    {
      title: "Bangles",
      src: "/assets/collection/09.jpg",
    },
    {
      title: "Bracelets",
      src: "/assets/collection/10.jpg",
    },
    {
      title: "Nose Pins",
      src: "/assets/collection/11.jpg",
    },
    {
      title: "Pendant Sets",
      src: "/assets/collection/12.jpg",
    },
  ]

  const productList = [
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-19.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-02.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-10.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-04.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-16.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-04.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-06.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-05.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-08.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-09.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-18.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-13.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-05_1.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-07.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-09.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-15.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
  ]

  return (
    <div>
      <Slider />
      <div>
        <div className="pl-8 py-10">
          <div className="flex gap-[1090px]">
            <p className="text-4xl">Wedding Rings</p>
            <div className="flex justify-end items-end px-8">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="destructive">
                    <LayoutList className="px-1" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader className="px-7">
                    <SheetTitle>Filter by</SheetTitle>
                    <SheetDescription>25 Products</SheetDescription>
                  </SheetHeader>
                  <Separator className="mt-3 mb-6" />
                  <ScrollArea className="h-[600px]">
                    <div className="flex flex-col pt-4 pb-8 justify-start items-start px-4">
                      <SheetTitle className="px-3.5 pb-4">
                        Categories
                      </SheetTitle>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Earring
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Ring
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Mangalsutra
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Braceletes
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Kadas
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Chain
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Pendant
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Diamond
                      </Button>
                    </div>
                    <div className="flex flex-col pt-4 pb-8 justify-start items-start px-4">
                      <SheetTitle className="px-3.5 pb-4">Gender</SheetTitle>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Male
                      </Button>
                      <Button
                        className="font-medium text-[#777] hover:text-black"
                        variant="link"
                      >
                        Female
                      </Button>
                    </div>
                    <div className="flex flex-col pt-4 pb-4 justify-start items-start px-4">
                      <SheetTitle className="px-3.5 pb-4">Colors</SheetTitle>
                      <div className="grid grid-cols-5">
                        <a
                          href="#"
                          className="bg-[#d1bebe] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#000] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#443737] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#f0f] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#0f0] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#00f] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#f00] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#ff0] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#0ff] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                        <a
                          href="#"
                          className="bg-[#4f9531] block w-[18px] h-[18px] rounded-xl hover:border hover:border-black m-1"
                        ></a>
                      </div>
                    </div>
                    <SheetFooter className="px-6 py-8">
                      <SheetClose asChild>
                        <>
                          <Button
                            className="px-3"
                            variant="destructive"
                            type="submit"
                          >
                            Apply
                          </Button>
                          <Button className="px-3" variant="ghost" type="reset">
                            Clear
                          </Button>
                        </>
                      </SheetClose>
                    </SheetFooter>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div
            className={cn(
              montserrat.className,
              "grid grid-cols-4 py-8 font-[15px]"
            )}
          >
            {productList.map((data) => (
              <div className="py-4">
                <Link href={data.href}>
                  <img
                    src={data.src}
                    alt="product-image"
                    className="h-[350px]"
                  />
                  <p className="pt-4 pb-2">{data.title}</p>
                  <div className="flex font-semibold text-muted text-[#6f6868]">
                    <pre>{data.desc}</pre>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing
