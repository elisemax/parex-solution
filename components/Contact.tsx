import { sendContactForm } from '@/lib/api'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  lang: string
  labelName: string
  labelPhone: string
  labelMail: string
  setOpen: (open: boolean) => void
  setError: (error: boolean) => void
  setIsLoading: (isLoading: boolean) => void
  contacts: ContactType[]
}

export default function Contact(props: Props) {
  const { title, description, privacy, policy, contacts, btn, labelMail, labelName, labelPhone, setOpen, setError, setIsLoading, lang } = props
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setMail] = useState('')
  const [touched, setTouched] = useState({})

  const handleBlur = (e: any) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      setOpen(true)
      setIsLoading(true)
      const res = await sendContactForm({ name, phone, email })
      if (res.message !== 'Success') {
        setError(true)
      }
    } catch (error) {
    }finally{
      setMail('')
      setPhone('')
      setName('')
      setIsLoading(false)
    }
      setMail('')
      setPhone('')
      setName('')
  }
  return (
    <div id='contact' className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">{title}</h2>{' '}
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex flex-col gap-x-4">
            <label htmlFor="fname" className="block text-sm font-semibold leading-6 text-gray-900">
              {labelName}
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              minLength={2}
              autoComplete="given-name"
              value={name}
              onBlur={handleBlur}
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
              className="min-w-0 flex-auto my-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              placeholder='josef kowalski'
            />
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              {labelPhone}
            </label>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              value={phone}
              onBlur={handleBlur}
              pattern="(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              required
              className="min-w-0 flex-auto my-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              placeholder='+48 501 100 100'
            />
            <label htmlFor="email-address" className="block text-sm font-semibold leading-6 text-gray-900">
              {labelMail}
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={email}
              onBlur={handleBlur}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              onChange={(e) => {
                setMail(e.target.value)
              }}
              autoComplete="email"
              className="min-w-0 flex-auto my-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              placeholder="josef.kowalski@gmail.com"
            />
            <button
              type="submit"
              className="flex-none rounded-md mt-1 bg-red-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {btn}
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            {description}{' '}
            <Link href={`${lang}/policy`} className="font-semibold text-blue-600 hover:text-blue-500">
              {privacy}&nbsp;{policy}
            </Link>
            .
          </p>
        </form>
      </div>
      <div className='grid mt-8 mx-auto grid-flow-row max-w-7xl ms:grid-cols-3 xs:grid-cols-2 xs:gap-6 gap-3 grid-cols-1 justify-items-start xs:px-10 px-6'>
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
