import React from 'react'

type Props = {
    title: string
    description: string
}
export default function MainSection(props: Props) {
    const { title, description } = props
  return (
        <div className="w-full h-full bg-no-repeat bg-cover bg-[url('../img/bg.jpeg')] bg-black/70 opacity-60 bg-blend-darken">
            <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-white text-center">{title}</h1>
            <p className="block text-2xl text-white text-center m-3">{description}</p>
        </div>
    </div>
  )
}
