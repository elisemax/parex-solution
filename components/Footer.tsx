import React from 'react'

type Props = {
    description: string
    privacy: string
    policy: string
}

export default function Footer(props: Props) {
    const { description, privacy, policy } = props
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-center text-sm leading-6 text-gray-900">
            {description}{' '}
            <a className="text-center font-semibold text-blue-600 hover:text-blue-500">
              {privacy}&nbsp;{policy}
            </a>
            .
          </p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}