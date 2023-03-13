import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'


export default function Lang() {
  return (
        <><Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head><main>
        <Navbar />
        <div className="w-full h-full bg-no-repeat bg-cover bg-[url('../img/bg.jpeg')] bg-black/70 opacity-60 bg-blend-darken">
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-white text-center">Parex Partners</h1>
            <p className="block text-2xl text-white text-center m-3">Doradztwo i pomoc w uzyskaniu karty pobytu
              w województwie Wielkopolskim
            </p>
          </div>
        </div>
      </main></>
  )
}
