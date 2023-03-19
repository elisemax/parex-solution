import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import CardList from '@/components/CardList'
import { CardDescription } from '@/components/CardList'
import MainSection from '@/components/MainSection'
import car from '../../img/icons/car.png'
import cardPass from '../../img/icons/cardPass.png'
import credit from '../../img/icons/credit.png'
import job from '../../img/icons/job.png'
import pass from '../../img/icons/pass.png'
import social from '../../img/icons/social.png'
import travel from '../../img/icons/travel.png'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import FeatureSection from '@/components/FeatureSection'

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
const titleMain = 'Parex Partners'
const descriptionMain = 'Консультационные услуги и помощь в получении карты побыту в Великопольском воеводстве'
const titleCard = 'ВОЗМОЖНОСТИ КАРТЫ ПОБЫТУ'

const features = [
  {
    name: 'Бесплатная первичная консультация.',
    description: 'Бесплатная консультация по получению карты побыту.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Оформление документов',
    description: 'Оформление документов для карты побыту ВНЖ и ПМЖ',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Помогаем в реестре автомобилей.',
    description: 'Помощь в регистрации автомобиля и замене водительского удостоверения.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Превод документов.',
    description: 'Делаем переводы документов на польский язык.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Подготовка документов .',
    description: 'Подготавливаем документы для польского регистра.',
    icon: CheckBadgeIcon,
  },
]
const titleFeature = 'Почему мы?'
const descriptionFeature = 'Мы предоставляем вам бесплатную первичную консультацию подробный анализ вашей ситуации и подбор оптимального решения. Берем на себя весь процесс контакта с Ужендом и инспектором, который ведет дело. Сохраняем сканы всех отправленных документов и предоставим подтверждение подачи в Уженд.Свяжемся с работодателем, уточним детали по трудоустройству и поможем правильно заполнить все необходимые документы. Сопровождаем дело до выдачи решения (децизии) и пластиковой карты.'

export default function Lang() {
  return (<>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Navbar/>
          <MainSection title={titleMain} description={descriptionMain}/>
          <CardList title={titleCard} cards={CARDS}/>
          <FeatureSection title={titleFeature} description={descriptionFeature} features={features}/>
        </main>
      </>
  )
}
