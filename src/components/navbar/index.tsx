'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-200">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/images/home-svgrepo-com.svg"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Links for desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="linkNavBar">Home</Link>
          <Link href="/oque" className="linkNavBar">O que é?</Link>
          <Link href="/historico" className="linkNavBar">Histórico</Link>
          <Link href="/atualmente" className="linkNavBar">Atualmente</Link>
          <Link href="/diagnostico" className="linkNavBar">Sintomas e Diagnóstico</Link>
          <Link href="/prevencao" className="linkNavBar">Prevenção e Tratamento</Link>
          <Link href="/matematica" className="linkNavBar">Modelos</Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/images/home-svgrepo-com.svg"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            <Link href="/" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">Home</Link>
            <Link href="/oque" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">O que é?</Link>
            <Link href="/historico" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">Histórico</Link>
            <Link href="/atualmente" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">Atualmente</Link>
            <Link href="/diagnostico" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">Sintomas e Diagnóstico</Link>
            <Link href="/prevencao" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">Prevenção e Tratamento</Link>
            <Link href="/matematica" className="linkNavBarMobile block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-green-300">Modelos</Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}