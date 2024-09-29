"use client";

import { FaBars, FaXmark } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHome } from "@/hooks/use-home";
import { Socials } from "./socials";

const navbarMenu = [
  { href: "/", label: "Home" },
  { href: "/profil", label: "Profil" },
  { href: "/tim-redaksi", label: "Tim Redaksi" },
  { href: "/info-iklan", label: "Info Iklan" },
  { href: "/kontak", label: "Kontak" },
  { href: "/karir", label: "Karir" },
];

export const NavbarBtn = () => {
  const { nav, openNav, closeNav } = useHome();

  const onClick = () => {
    if (nav) {
      closeNav();
    } else openNav();
  };

  return (
    <Button onClick={onClick} variant={"outline"} size={"icon"} className="static md:hidden">
      <div className={`${nav ? "rotate-180" : ""} transition`}>
        {nav ? <FaXmark size={20} /> : <FaBars size={20} />}
      </div>
    </Button>
  );
};

export const Navbar = () => {
  const { nav, closeNav } = useHome();
  const pathname = usePathname();
  const path1 = pathname.split("/")[1] || "";
  const onClick = () => {
    if (nav) closeNav();
  };

  return (
    <nav
      className={`${
        nav ? "scale-y-100" : "scale-y-0"
      } origin-top md:scale-y-100 transition bg-white/90 dark:bg-black/90 dark:md:bg-transparent fixed top-16 left-0 right-0 md:static p-3 md:p-0 shadow md:shadow-none`}
    >
      <div className="flex flex-col md:flex-row gap-0 md:gap-6">
        {navbarMenu.map((item, i) => (
          <Link
            onClick={onClick}
            href={item.href}
            key={i}
            className={`${
              path1 === item.href.split("/")[1] ? "text-primary" : ""
            } hover:text-green-500 text-sm min-w-max py-3 md:py-0 border-b md:border-none text-center`}
          >
            {item.label}
          </Link>
        ))}

        <Socials className="flex md:hidden items-center justify-center py-4" />
      </div>
    </nav>
  );
};
