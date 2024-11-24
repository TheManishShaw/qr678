"use client";
import React, { forwardRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
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
const Header = () => {
  const path = usePathname();
  return (
    <nav className="bg-white  shadow-md shadow-slate-500 border-b border-[#2D2D3099]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/svg/logo/logo.svg"
            alt="Flowbite Logo"
            height={100}
            width={100}
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      path == "/" ? " text-primary" : " text-muted-text-color "
                    }
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    path == "/product"
                      ? " text-primary"
                      : "text-muted-text-color"
                  }
                >
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent id="product">
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
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      path == "/blog"
                        ? " text-primary"
                        : "text-muted-text-color"
                    }
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuTrigger
                    className={
                      path == "/events"
                        ? " text-primary"
                        : "text-muted-text-color"
                    }
                  >
                    Events
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="border-0">
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
                        src="/assets/svg/neo-product-image.svg"
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
                        src="/assets/svg/suite-product-image.svg"
                        alt="Product Image"
                        height={240}
                        width={240}
                      />
                    </a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/aboutUs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      path == "/aboutUs"
                        ? " text-primary"
                        : " text-muted-text-color"
                    }
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contactUs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      path == "/contactUs"
                        ? " text-primary"
                        : " text-muted-text-color"
                    }
                  >
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
