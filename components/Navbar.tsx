import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ScrollLink from './ScrollLink'

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
type Props = {
  sectionReviews: string
  sectionServices: string
  sectionAbout: string
  sectionContact: string
}
const Navbar = (props: Props) => {
  const { sectionReviews, sectionServices, sectionAbout, sectionContact } = props
   return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:text-base font-mono text-left text-sm ">
                   PAREX
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <ScrollLink
                    href="#services"
                    className="inline-flex items-center border-b-2 hover:border-red-500 text-gray-500 border-gray-300 px-1 pt-1 text-sm font-medium hover:text-gray-900"
                  >
                    {sectionServices}
                  </ScrollLink>
                  <ScrollLink
                    href="#benefit"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-500 border-gray-300  hover:text-gray-700"
                  >
                    {sectionAbout}
                  </ScrollLink>
                  <ScrollLink
                    href="#contact"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-500 border-gray-300  hover:text-gray-700"
                  >
                    {sectionContact}
                  </ScrollLink>
                  <ScrollLink
                    href="#reviews"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-500 border-gray-300 hover:text-gray-700"
                  >
                    {sectionReviews}
                  </ScrollLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                </button>
                <div
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-500 border-gray-300 hover:text-gray-700">
                      <Link href='/ru'>
                      ru
                </Link>
                  </div>
                <span>/</span>
                <div
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-500 border-gray-300 hover:text-gray-700">
                <Link href='/ua'>
                    ua
                </Link>
                  </div>
                <span>/</span>
                <div
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-500 border-gray-300 hover:text-gray-700">
                  <Link href='/pl'>
                      pl
                </Link>
                  </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <ScrollLink href="#services">
              <Disclosure.Button
                as="a"
                className="block border-l-4 text-gray-500 py-2 pl-3 pr-4 text-base font-medium hover:text-red-700 hover:border-red-500 hover:bg-indigo-50"
              >
                {sectionServices}
              </Disclosure.Button>
              </ScrollLink>
              <ScrollLink href="#benefit">
              <Disclosure.Button
                as="a"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-red-500 hover:bg-indigo-50 hover:text-gray-700"
              >
                {sectionAbout}
              </Disclosure.Button>
              </ScrollLink>
              <ScrollLink href="#contact">
              <Disclosure.Button
                as="a"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-red-500 hover:bg-indigo-50 hover:text-gray-700"
              >
                {sectionContact}
              </Disclosure.Button>
              </ScrollLink>
              <ScrollLink href="#reviews">
              <Disclosure.Button
                as="a"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-red-500 hover:bg-indigo-50 hover:text-gray-700"
              >
                {sectionReviews}
              </Disclosure.Button>
              </ScrollLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Navbar;