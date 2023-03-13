import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import CardList from '@/components/CardList'
import { CardDescription } from '@/components/CardList'
import car from '../../img/icons/car.png'
import cardPass from '../../img/icons/cardPass.png'
import credit from '../../img/icons/credit.png'
import job from '../../img/icons/job.png'
import pass from '../../img/icons/pass.png'
import social from '../../img/icons/social.png'
import travel from '../../img/icons/travel.png'

const CARDS: CardDescription[] = [
  {
    name: 'Гражданство',
    imageSrc: pass,
    description: 'Карта побыту – это первый шаг к получению Польского гражданства.'
  },
  {
    name: 'Карты побыту для семьи',
    imageSrc: cardPass,
    description: 'Члены вашей семьи также смогут получить карты на основе вашего ВНЖ или ПМЖ'
  },
  {
    name: 'Путешествие',
    imageSrc: travel,
    description: 'Возможность пребывания в других странах Шенгенской зоны без визы.'
  },
  {
    name: 'Регистрация автомобиля',
    imageSrc: car,
    description: 'С картой побыту вы сможете зарегистрировать свой автомобиль'
  },
  {
    name: 'Программа 500+',
    imageSrc: social,
    description: '500+ злотых каждый месяц Получайте социальную помощь до совершеннолетия ребенка'
  },
  {
    name: 'Возможность кредитования',
    imageSrc: credit,
    description: 'С картой побыту, для вас будет доступно кредитование в Польских банках.'
  },
  {
    name: 'Легальное трудоустройство',
    imageSrc: job,
    description: 'Вы сможете легально работать на территории Польской Републики'
  }
]


export default function Lang() {
  const title = 'ВОЗМОЖНОСТИ КАРТЫ ПОБЫТУ'
  return (<>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Navbar/>
          <div className="w-full h-full bg-no-repeat bg-cover bg-[url('../img/bg.jpeg')] bg-black/70 opacity-60 bg-blend-darken">
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="text-6xl font-bold text-white text-center">Parex Partners</h1>
              <p className="block text-2xl text-white text-center m-3">Консультационные услуги и помощь в получении карты побыту
              в Великопольском воеводстве
              </p>
              </div>
          </div>
          <CardList title={title} cards={CARDS} />
        </main>
      </>
  )
}
