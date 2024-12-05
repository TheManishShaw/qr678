"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const ListItem = React.forwardRef
(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const DesktopNav = () => {
  const path = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-md",
                path === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/products">

          <NavigationMenuTrigger
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              path.startsWith("/product") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Product
          </NavigationMenuTrigger>
        </Link>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary ">
                        QR678 Neo®
                      </h5>
                      <p className="font-normal text-primary">
                        One of the best hair regrowth product.
                      </p>
                      <Image
                        src="/assets/svg/homepage/neo-product-image.svg"
                        alt="Product Image"
                        height={200}
                        width={200}
                      />
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary ">
                        QR678 Suite®
                      </h5>
                      <p className="font-normal text-primary">
                        One of the best hair regrowth product.
                      </p>
                      <Image
                        className="mt-10"
                        src="/assets/svg/homepage/suite-product-image.svg"
                        alt="Product Image"
                        height={240}
                        width={240}
                      />
                    </a>
                  </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://blog.qr678.com/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-md",
                "text-muted-foreground"
              )}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              path.startsWith("/events") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Events
          </NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary ">
                        QR678 Neo®
                      </h5>
                      <p className="font-normal text-primary">
                        One of the best hair regrowth product.
                      </p>
                      <Image
                        src="/assets/svg/homepage/neo-product-image.svg"
                        alt="Product Image"
                        height={200}
                        width={200}
                      />
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary ">
                        QR678 Suite®
                      </h5>
                      <p className="font-normal text-primary">
                        One of the best hair regrowth product.
                      </p>
                      <Image
                        className="mt-10"
                        src="/assets/svg/homepage/suite-product-image.svg"
                        alt="Product Image"
                        height={240}
                        width={240}
                      />
                    </a>
                  </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-md",
                path === "/aboutUs" ? "text-primary" : "text-muted-foreground"
              )}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-md",
                path === "/contactUs" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ href, children }) => (
    <li>
      <Link href={href} className="block py-2 text-sm">
        {children}
      </Link>
    </li>
  );

  const NavItemWithSubmenu = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-2 text-sm"
        >
          {label}
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <ul className="pl-4 mt-2 space-y-2">
            {items.map((item) => (
              <NavItem key={item.title} href={item.href}>
                {item.title}
              </NavItem>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav>
          <ul className="space-y-4">
            <NavItem href="/">Home</NavItem>
            <NavItemWithSubmenu
              label="Product"
              items={[
                { title: "QR678 Neo®", href: "/product/qr678-neo", description: "Advanced hair regrowth solution" },
                { title: "QR678 Suite®", href: "/product/qr678-suite", description: "Complete hair care system" },
              ]}
            />
            <NavItem href="https://blog.qr678.com/">Blog</NavItem>
            <NavItemWithSubmenu
              label="Events"
              items={[
                { title: "Upcoming Events", href: "/events/upcoming", description: "Join our future events" },
                { title: "Past Events", href: "/events/past", description: "Recap of our previous events" },
              ]}
            />
            <NavItem href="/aboutUs">About Us</NavItem>
            <NavItem href="/contactUs">Contact Us</NavItem>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  return (
    <header className="bg-white text-[#A7A7AB]     shadow-xs top-0 sticky shadow-slate-500 z-20 border-b border-[#2D2D3099]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/svg/logo/logo.svg"
                alt="QR678"
                height={80}
                width={80 }
              />
            </Link>
          </div>
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

