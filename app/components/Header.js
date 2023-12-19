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
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const Header = () => {
  const components = [
    {
      title: "Our Brands",
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
    <div className="flex flex-row justify-between pt-4">
      <Image
        src="/assets/logo.png"
        width="100"
        height="100"
        className="pl-6"
        alt="K M Choksi"
      />
      <div className="mx-auto font-normal">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>History</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink>{component.title}</NavigationMenuLink>
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
                        <NavigationMenuLink className="hover:text-red-700">
                          <NavList key={listItems.title} data={listItems} />
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>Store Locator</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row gap-10 h-10 mr-7 items-center">
        <Command className="rounded-lg border shadow-md focus:ring-offset-0 focus:ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 flex flex-row items-center">
          <Input className="" placeholder="Search Something..." />
          <Search className="mx-2" />
        </Command>
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
