import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React, { useState } from 'react'
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
import mail from '../../img/icons/gmail.png'
import phone from '../../img/icons/phone-call.png'
import telegram from '../../img/icons/telegram.png'
import whatsapp from '../../img/icons/whatsapp.png'
import viber from '../../img/icons/viber.png'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import FeatureSection from '@/components/FeatureSection'
import Contact from '@/components/Contact'
import Modal from '@/components/Modal'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

const CARDS: CardDescription[] = [
  {
    name: 'Громадянство',
    imageSrc: pass,
    description: 'Карта побуту – це перший крок до отримання Польського громадянства.'
  },
  {
    name: "Карти побуту для сім'ї",
    imageSrc: cardPass,
    description: 'Члени вашої родинитакож зможуть отриматикарти на основі вашого ВНЖ або ПМП'
  },
  {
    name: 'Подорож',
    imageSrc: travel,
    description: 'Можливість перебування в інших країнах Шенгенськоїзони без візи.'
  },
  {
    name: 'Реєстрація автомобіля',
    imageSrc: car,
    description: 'З картою побуту ви зможете зареєструвати свій автомобіль'
  },
  {
    name: 'Програма 500+',
    imageSrc: social,
    description: '500+ злотих щомісяцяОтримуйте соціальнудопомога до повноліття дитини'
  },
  {
    name: 'Можливість кредитування',
    imageSrc: credit,
    description: 'З картою побуту, вам буде доступне кредитування в Польські банки.'
  },
  {
    name: 'Легальне працевлаштування',
    imageSrc: job,
    description: 'Ви зможете легально працювати на території Польської Республіки'
  }
]
const titleCard = 'МОЖЛИВОСТІ КАРТИ ПОБИТУ'
const titleMain = 'Parex Partners'
const buttonMain = 'Замовити дзвінок'
const descriptionMain = 'Консультаційні послуги та допомога в отриманні карти побуту у Великопольському воєводстві'
const features = [
  {
    name: 'Безкоштовна первинна консультація.',
    description: 'Безкоштовна консультація щодо отримання карти побиту.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Оформлення документів',
    description: 'Оформлення документів для карти побиту ВНЖ і ПМП',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Допомагаємо в реєстрі автомобілів.',
    description: 'Допомога в реєстрації автомобіля та заміні водійського посвідчення.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Переклад документів.',
    description: 'Робимо переклади документів на польську мову.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Підготовка документів.',
    description: 'Готуємо документи для польського регістра.',
    icon: CheckBadgeIcon,
  },
]
const titleFeature = 'Чому ми?'
const descriptionFeature = "Ми надаємо вам безкоштовну первинну консультацію, детальний аналіз вашої ситуації та підбір оптимального рішення. Беремо на себе весь процес контакту з Ужендом та інспектором, який веде справу. Зберігаємо скани всіх відправлених документів і надамо підтвердження подачі в Уженд. Зв'язуємося з роботодавцем, уточнимо деталі з працевлаштування та допоможемо правильно заповнити всі необхідні документи. Супроводжуємо справу до видачі рішення (децизії) і пластикової карти."
const titleContact = 'Просто зателефонуйте нам або напишіть будь-яким зручним способом:'
const descriptionContact = 'Ми піклуємося про ваші дані. Ознайомтеся з нашою'
const privacy = 'Політикою'
const policy = 'конфіденційність'
const btn = 'Замовити дзвінок'
const labelMail = 'Ваш email'
const labelName = "Ваше ім'я"
const labelPhone = 'Ваш телефон'
const contacts = [
  {
    title: 'Телефон',
    contact: '+48 728 482 157 ',
    img: phone
  },
  {
    title: 'Email',
    contact: 'parex-partners@gmail.com',
    img: mail
  },
  {
    title: 'WhatsApp',
    contact: '+48 728 482 157 ',
    img: whatsapp
  },
  {
    title: 'Telegram',
    contact: '+48 728 482 157 ',
    img: telegram
  },
  {
    title: 'Viber',
    contact: '+48 728 482 157 ',
    img: viber
  },
]
const modalTitleSuccess = 'Дякую за заявку!'
const modalTitleError = 'Помилка'
const modalSuccess = "Ми зв'яжемося з вами найближчим часом."
const modalError = 'Сталася помилка. Спробуйте пізніше.'
const modalButton = 'Закрити'
const lang = 'ua'

export default function Lang() {
  const [ openModal, setOpenModal ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ isLoading, setIsLoading] = useState(false)
  return (
        <><Head>
      <title>Parex Partners Оформлення документів для карти побиту ВНЖ і ПМП</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <main>
          <Navbar sectionAbout='Вигоди' sectionContact="Зв'язатися" sectionReviews='Відгуки' sectionServices='Послуги' />
          <MainSection button={buttonMain} title={titleMain} description={descriptionMain} />
          <CardList title={titleCard} cards={CARDS} />
          <FeatureSection title={titleFeature} description={descriptionFeature} features={features}/>
          <Contact lang={lang} setOpen={setOpenModal} setIsLoading={setIsLoading} setError={setError} labelName={labelName} labelMail={labelMail} labelPhone={labelPhone} contacts={contacts} title={titleContact} description={descriptionContact} privacy={privacy} btn={btn} policy={policy}/>
          <Modal modalTitleError={modalTitleError} modalTitleSuccess={modalTitleSuccess} button={modalButton} modalSuccess={modalSuccess} modalError={modalError} setOpen={setOpenModal} error={error} open={openModal} isLoading={isLoading}/>
          <Reviews/>
          <Footer lang={lang} privacy={privacy} policy={policy} description={descriptionContact}/>
        </main>
      </>
  )
}
