import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" }
];

const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-1" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))
      }
    </nav>
  );
};

export default Navbar;