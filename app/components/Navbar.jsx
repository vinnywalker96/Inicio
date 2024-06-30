"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/logo.png";
import { FaUser } from "react-icons/fa";
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'login', href: '/login' },
  { name: 'Signup', href: '/signup' },
];


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2D6B66]">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <Link href="/" className="flex items-center">
              <span className="sr-only">Inicio</span>
              <Image className="object-fit" src={logo} alt="Logo" />
          </Link>
        </div>



        {/* Navigation links for larger screens */}
        <div className="hidden sm:flex lg:flex-1 lg:justify-start">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-200 px-4">
              
                {item.name}
            
            </Link>
          ))}
        </div>


        {/* Search form */}
        <div className="hidden sm:flex flex-1 justify-center">
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="Search" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Icons and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/wishlist" className="text-gray-700 hover:text-gray-900">
                <HeartIcon className="h-6 w-6" />
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                <FaUser className="h-6 w-6" />
            </Link>
          </div>
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100 p-6 mx-auto"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-20" />
          <DialogPanel className="fixed inset-y-0 right-0 z-20 w-3/5  text-gray-100 overflow-y-auto bg-[#2D6B66] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                
                  <span className="sr-only">Inicio</span>
                  
                
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-5 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400">
                        {item.name}
                    </Link>
                  ))}
                </div>
                {/*<div className="py-6">
                  <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Log in
                  
                  </Link>
                </div>*/}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
      
    </header>
  );
}
