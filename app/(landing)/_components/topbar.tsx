"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import {
  Icon,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui"

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
        <div className="flex items-center gap-2 ml-auto">
          <Icon name="phone-call" />
          <span className="text-sm font-medium">+123 456 7890</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar
