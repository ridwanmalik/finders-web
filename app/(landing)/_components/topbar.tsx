"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui"
import { getCountryFlag } from "@/utils"
import Image from "next/image"

const links = [
  { href: "/", name: "Home" },
  { href: "/find-job", name: "Find Job" },
  { href: "/community", name: "Community" },
  { href: "/employers", name: "Employers" },
  { href: "/candidates", name: "Candidates" },
  { href: "/freelancing", name: "Freelancing" },
  { href: "/career-guide", name: "Career Guide" },
  { href: "/learning", name: "Learning" },
  { href: "/pricing-plans", name: "Pricing Plans" },
]

const Topbar = () => {
  const pathname = usePathname()

  return (
    <div className="bg-background">
      <div className="container flex">
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link, index) => (
              <NavigationMenuItem key={index}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === link.href}>
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-6 ml-auto">
          <div className="flex items-center gap-2">
            <Icon name="phone-call" />
            <span className="text-sm font-medium">+123 456 7890</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image src={getCountryFlag("US")} alt="flag" width={20} height={20} />
                English
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src={getCountryFlag("US")} alt="flag" width={20} height={20} />
                  English
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src={getCountryFlag("BD")} alt="flag" width={20} height={20} />
                  Bangla
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Topbar
