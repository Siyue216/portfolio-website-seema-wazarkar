"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronDown } from "lucide-react";
import CV from "./cv";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 text-gray-800 fixed top-0 z-50 w-full shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h3 className="text-xl font-bold">Dr. Seema Wazarkar</h3>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="home">Home</NavLink>
              <NavLink href="teaching">Teaching</NavLink>
              <NavLink href="research">Research</NavLink>
              <NavLink href="contact">Contact</NavLink>
              <Dropdown />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="home">Home</MobileNavLink>
            <MobileNavLink href="teaching">Teaching</MobileNavLink>
            <MobileNavLink href="research">Research</MobileNavLink>
            <MobileNavLink href="contact">Contact</MobileNavLink>
            <MobileNavLink href="#">CV</MobileNavLink>
            <MobileNavLink href="projects">Projects</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    to={href}
    smooth
    duration={1300}
    className="text-gray-600 hover:bg-gray-200 cursor-pointer hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    to={href}
    className="text-gray-600 hover:bg-gray-200 cursor-pointer hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          More
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-50 ring-1 ring-gray-800 ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <CV />
            <Link
              to={"projects"}
              duration={1300}
              smooth
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:text-gray-900"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
