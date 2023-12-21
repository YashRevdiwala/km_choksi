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
import { MessageCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

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
    <div className="flex flex-row justify-between shadow-md pt-4 pb-6">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width="100"
          height="100"
          className="pl-6"
          alt="K M Choksi"
        />
      </Link>
      <div className="mx-auto font-normal">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/our-history" legacyBehavior passHref>
                <NavigationMenuLink className="relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-rose-700 before:transition-all before:duration-500 hover:before:scale-x-100">
                  History
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <Link href={component.href} legacyBehavior passHref>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink className="relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-rose-700 before:transition-all before:duration-500 hover:before:scale-x-100">
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
                <NavigationMenuLink className="relative before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-rose-700 before:transition-all before:duration-500 hover:before:scale-x-100">
                  Store Locator
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row gap-10 h-10 mr-7 items-center">
        <Command className="rounded-lg shadow-md  flex flex-row items-center ">
          <Input className="" placeholder="Search Something..." />
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
