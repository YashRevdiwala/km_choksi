"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import NavList from "./NavList"
import { Command } from "@/components/ui/command"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Header = () => {
  const components = [
    {
      title: "History",
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
    {
      title: "Store Locator",
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
      <div className="mx-auto font-bold">
        <NavigationMenu>
          <NavigationMenuList>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <NavigationMenuTrigger>{component.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[620px] gap-3 p-4">
                    {component.subCat.map((listItems) => (
                      <NavList key={listItems.title} data={listItems} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row gap-10 h-10 mr-7 items-center">
        <Command className="rounded-lg border shadow-md focus:ring-offset-0 focus:ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 flex flex-row items-center">
          <Input className="" placeholder="Search Something..." />
          <Search className="mx-2" />
        </Command>
        <Button variant="secondary" className="text-red-600">
          Book an Appointment
        </Button>
      </div>
    </div>
  )
}

export default Header
