import Image, { StaticImageData } from 'next/image'
import React from 'react'

type ContactType = {
  title: string
  contact: string
  img: StaticImageData
}

type Props = {
  title: string
  description: string
  privacy: string
  policy: string
  btn: string
  contacts: ContactType[]
}

export default function Contact(props: Props) {
  const { title, description, privacy, policy, contacts, btn } = props
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">{title}</h2>{' '}
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-red-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {btn}
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            {description}{' '}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
              {privacy}&nbsp;{policy}
            </a>
            .
          </p>
        </form>
      </div>
      <div className='grid mt-8 grid-flow-row ms:grid-cols-3 xs:grid-cols-2 xs:gap-6 gap-3 grid-cols-1 justify-items-start xs:mx-10 mx-2'>
          {contacts.map((contact) => 
          <div key={contact.title} className='flex justify-center'>
              <Image src={contact.img} alt="Picture of the author" width={40} height={40} />
              <div className='flex flex-col ml-2 justify-around text-sm font-semibold'>
                <span>{contact.title}</span>
                <span>{contact.contact}</span>
              </div>
            </div>)}
        </div>
    </div>
  )
}
