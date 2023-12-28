"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import NavList from "./NavList"
import { Command } from "@/components/ui/command"
import {
  AlignLeft,
  Facebook,
  Instagram,
  MessageCircle,
  Search,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

const Header = () => {
  const components = [
    {
      title: "Our Brands",
      href: "/our-brands",
      subCat: [
        {
          title: "Kanyadan - Wedding Collection1",
        },
        {
          title: "Kanyadan - Wedding Collection3",
        },
        {
          title: "Kanyadan - Wedding Collection2",
        },
      ],
    },
    {
      title: "Our Products",
      href: "/products",
      subCat: [
        {
          title: "Kanyadan - Wedding Collection1",
        },
        {
          title: "Kanyadan - Wedding Collection2",
        },
        {
          title: "Kanyadan - Wedding Collection3",
        },
      ],
    },
    {
      title: "Diamond",
      href: "/diamond",
      subCat: [
        {
          title: "Kanyadan - Wedding Collection1",
        },
        {
          title: "Kanyadan - Wedding Collection2",
        },
        {
          title: "Kanyadan - Wedding Collection3",
        },
      ],
    },
  ]

  return (
    <div className="flex space-x-20  w-screen md:block lg:flex lg:flex-row lg:justify-between shadow-lg md:px-16 pt-4 pb-6 sticky top-0 bg-white z-10">
      <div className="lg:hidden pl-3 font-medium">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <AlignLeft />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] mt-6">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/assets/short_logo.png"
                  width="60"
                  height="60"
                  className="pl-6"
                  alt="K M Choksi"
                />
              </SheetTitle>
            </SheetHeader>
            <Separator className="mt-8" />
            <ScrollArea className="h-[400px]">
              <div className="flex flex-col justify-start items-start text-3xl gap-4 py-16 font-semibold">
                <Accordion
                  type="single"
                  collapsible
                  className="text-base hover:border-0 border-0 space-y-4"
                >
                  <AccordionItem value="item-1" className="border-0">
                    <Link href="/our-history" legacyBehavior passHref>
                      <p>History</p>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-0">
                    <AccordionTrigger className="font-bold">
                      Our Brands
                    </AccordionTrigger>
                    <Link href="/our-brands" legacyBehavior passHref>
                      <AccordionContent>Brand 01</AccordionContent>
                    </Link>
                    <Link href="/our-brands" legacyBehavior passHref>
                      <AccordionContent>Brand 02</AccordionContent>
                    </Link>
                    <Link href="/our-brands" legacyBehavior passHref>
                      <AccordionContent>Brand 03</AccordionContent>
                    </Link>
                    <Link href="/our-brands" legacyBehavior passHref>
                      <AccordionContent>Brand 04</AccordionContent>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-0">
                    <AccordionTrigger className="font-bold">
                      Our Products
                    </AccordionTrigger>
                    <Link href="/products" legacyBehavior passHref>
                      <AccordionContent>Product 01</AccordionContent>
                    </Link>
                    <Link href="/products" legacyBehavior passHref>
                      <AccordionContent>Product 02</AccordionContent>
                    </Link>
                    <Link href="/products" legacyBehavior passHref>
                      <AccordionContent>Product 03</AccordionContent>
                    </Link>
                    <Link href="/products" legacyBehavior passHref>
                      <AccordionContent>Product 04</AccordionContent>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-0">
                    <AccordionTrigger className="font-bold">
                      Diamond
                    </AccordionTrigger>
                    <Link href="/diamond" legacyBehavior passHref>
                      <AccordionContent>Diamond</AccordionContent>
                    </Link>
                    <Link href="/diamond" legacyBehavior passHref>
                      <AccordionContent>Diamond</AccordionContent>
                    </Link>
                    <Link href="/diamond" legacyBehavior passHref>
                      <AccordionContent>Diamond</AccordionContent>
                    </Link>
                    <Link href="/diamond" legacyBehavior passHref>
                      <AccordionContent>Diamond</AccordionContent>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-0 pb-4">
                    <Link href="/locate-store" legacyBehavior passHref>
                      <p>Store Locator</p>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="border-0">
                    <Link href="/book-appointment" legacyBehavior passHref>
                      <p>Book Appointment</p>
                    </Link>
                  </AccordionItem>
                </Accordion>
              </div>
            </ScrollArea>
            <SheetFooter className="pt-10">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <Facebook color="red" />
                  <Twitter color="red" />
                  <Instagram color="red" />
                  <Youtube color="red" />
                </div>
                <p>© 2023 K M Choksi jewellers.</p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <Link href="/">
        <Image
          src="/assets/logo.png"
          width="100"
          height="100"
          className="pl-6"
          alt="K M Choksi"
        />
      </Link>

      <div className="lg:hidden pt-3">
        <Sheet>
          <SheetTrigger asChild>
            <Search className="mx-2" />
          </SheetTrigger>
          <SheetContent side="top" className="w-screen h-screen">
            <Command className="flex py-8">
              <Input
                className=""
                placeholder="Search Something..."
                name="search-box"
              />
              <Search className="mx-2 absolute right-6 top-16" />
            </Command>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block md:mx-auto md:font-normal">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/our-history" legacyBehavior passHref>
                <NavigationMenuLink className="font-semibold relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-rose-700 before:transition-all before:duration-500 hover:before:scale-x-100">
                  History
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <Link href={component.href} legacyBehavior passHref>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink className="font-semibold relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-rose-700 before:transition-all before:duration-500 hover:before:scale-x-100">
                      {component.title}
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[620px] gap-3 p-4">
                    {component.subCat.map((listItems) => (
                      <Link
                        key={component.title}
                        href="/"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="hover:text-rose-700">
                          <NavList key={listItems.title} data={listItems} />
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link href="/locate-store" legacyBehavior passHref>
                <NavigationMenuLink className="font-semibold relative before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-rose-700 before:transition-all before:duration-500 hover:before:scale-x-100">
                  Store Locator
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-10 lg:h-10 lg:mr-7 lg:items-center">
        <Command className="rounded-lg shadow-md  flex flex-row items-center ">
          <Input
            className=""
            placeholder="Search Something..."
            name="search-box"
          />
          <Search className="mx-2" />
        </Command>
        <MessageCircle
          onClick={() => window.open("https://wa.me/+919510970230")}
          className="h-[50px] w-[50px]"
        />
        <Button
          variant="secondary"
          className="text-rose-500 border border-rose-500"
          asChild
        >
          <Link href="/book-appointment">Book an Appointment</Link>
        </Button>
      </div>
    </div>
  )
}

export default Header
