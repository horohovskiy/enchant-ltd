import Image from 'next/image'
import { Inter } from 'next/font/google'

import Category from '@/pages/category'

const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Parfumes', href: '/category' },
  { name: 'Makeup', href: '/category' },
  { name: 'Face', href: '/category' },
  { name: 'Hair', href: '/category' },
]

const products = [
  {
    id: 1,
    name: 'Dior Sauvage',
    color: 'Men',
    price: '$175',
    href: '#',
    imageSrc: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/d/i/dior-sauvage-eau-de-toilette-200ml.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 2,
    name: 'Kylie Cosmetics Matte Lip Kit',
    color: 'Women',
    price: '$59',
    href: '#',
    imageSrc: 'https://media.superpharm.eu/media/catalog/product/cache/07e643f7e64afe5b94f277b4a7389b28/k/y/kylie-cosmetics-matte-lip-kit-302-snow-way-bae-zestaw-do-makijazu-ust-1szt_2_.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 3,
    name: 'BLEU DE CHANEL',
    color: 'Men',
    price: '$199',
    href: '#',
    imageSrc: 'https://media.douglas.pl/medias/Ir1VfB819600-0-global.jpg?context=bWFzdGVyfGltYWdlc3wzNDk1M3xpbWFnZS9qcGVnfGgzNy9oYTYvMTYxMzgyNzUwMjkwMjIvSXIxVmZCODE5NjAwXzBfZ2xvYmFsLmpwZ3xhNWI0NDVlMjdkNzljYTg2OWRmYWMwYjdhZDM1ZGM2ZmQzZWZkZWJkMmY3YTgyOWE1NGUzNGRmNmM1NjVkYmY2&grid=true',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 4,
    name: 'INGLOT INTENSE SPARKLER',
    color: 'Women',
    price: '$75',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIfZOngnsCg5XkjqxFkGdD9zkB_Q1ii4QRs3IVdO5RsxO9Pbn',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // More products...
]

export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <main>


      <div className="">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-6 w-auto"
                    src="/enchant-logo-black.png"
                    alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-black">
                    {item.name}
                  </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-black">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                      className="h-6 w-auto"
                      src="/enchant-logo-white.png"
                      alt=""
                  />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate pt-14">
          <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                  Scent & Glamour: Unleash Your Beauty
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Discover a world of alluring scents and exquisite makeup, where beauty knows no bounds.
                </p>
                {/*<div className="mt-10 flex items-center justify-center gap-x-6">*/}
                {/*  <a*/}
                {/*      href="#"*/}
                {/*      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"*/}
                {/*  >*/}
                {/*    Get started*/}
                {/*  </a>*/}
                {/*  <a href="#" className="text-sm font-semibold leading-6 text-white">*/}
                {/*    Learn more <span aria-hidden="true">→</span>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
              {/*<img*/}
              {/*    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"*/}
              {/*    alt="App screenshot"*/}
              {/*    width={2432}*/}
              {/*    height={1442}*/}
              {/*    className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"*/}
              {/*/>*/}
            </div>
          </div>
          <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
        </div>
      </div>





      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
            <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>



    </main>
  )
}
