import React from 'react'

type Props = {
    title: string
    description: string
}

export default function TextContent(props: Props) {
  const { title, description } = props
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">{title}</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}
