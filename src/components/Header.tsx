import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 md:px-8">
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src={logo} className="h-10 md:h-16 w-auto" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <i className="text-2xl fas fa-bars"></i>
          </button>
        </div>
        <PopoverGroup className="hidden md:flex md:gap-x-8 lg:gap-x-12 text-lg">
          <Link
            to="/"
            className={`leading-6 ${isActive("/") ? "text-primary" : "text-gray-500"} hover:text-primary`}
          >
            Home
          </Link>
          <Link
            to="market"
            className={`leading-6 ${isActive("/market") ? "text-primary" : "text-gray-500"} hover:text-primary`}
          >
            Market
          </Link>
          <Link
            to="about"
            className={`leading-6 ${isActive("/about") ? "text-primary" : "text-gray-500"} hover:text-primary`}
          >
            About
          </Link>
          <Link
            to="contact"
            className={`leading-6 ${isActive("/contact") ? "text-primary" : "text-gray-500"} hover:text-primary`}
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link
            to="login"
            className="text-sm font-semibold leading-6 text-primary border-primary p-2 px-5 rounded-3xl border-2 hover:text-white hover:bg-primary"
          >
            Log in
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="h-6 w-6">✖</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive("/") ? "text-primary" : "text-gray-700"} hover:bg-gray-50`}
                >
                  Home
                </Link>
                <Link
                  to="market"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive("/market") ? "text-primary" : "text-gray-700"} hover:bg-gray-50`}
                >
                  Market
                </Link>
                <Link
                  to="about"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive("/about") ? "text-primary" : "text-gray-700"} hover:bg-gray-50`}
                >
                  About
                </Link>
                <Link
                  to="contact"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive("/contact") ? "text-primary" : "text-gray-700"} hover:bg-gray-50`}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}