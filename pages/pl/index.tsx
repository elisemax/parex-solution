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
    name: 'Obywatelstwo',
    imageSrc: pass,
    description: 'Karta pobytu -to jestpierwszy krok douzyskanie polskiego obywatelstwo.'
  },
  {
    name: 'Karty pobytowe dla rodziny',
    imageSrc: cardPass,
    description: 'Członkowie Twojej rodzinybędzie mógł również otrzymać karty na podstawie zezwolenia na pobyt lub stałego pobytu'
  },
  {
    name: 'Podróż',
    imageSrc: travel,
    description: 'Możliwośćpobyt w innych krajach strefy Schengenstrefy bezwizowe.'
  },
  {
    name: 'Rejestracja pojazdu',
    imageSrc: car,
    description: 'Posiadając kartę pobytu możesz zarejestrować swój samochód'
  },
  {
    name: 'Programu 500+',
    imageSrc: social,
    description: '500 zł+ miesięcznieBądź towarzyskipomoc do pełnoletnościdziecko'
  },
  {
    name: 'Możliwość użyczenia',
    imageSrc: credit,
    description: 'Z kartą pobytową pożyczka będzie dla Ciebie dostępnapolskie banki.'
  },
  {
    name: 'Legalne zatrudnienie',
    imageSrc: job,
    description: 'Będziesz mógł legalnie pracować na terenie RP'
  }
]
const titleCard = 'MOŻLIWOŚCI KARTY POBYTU'
const titleMain = 'Parex Partners'
const descriptionMain = 'Doradztwo i pomoc w uzyskaniu karty pobytu w województwie Wielkopolskim'
const buttonMain = 'Kontakt'

const features = [
  {
    name: 'Bezpłatna wstępna konsultacja.',
    description: 'Bezpłatne porady dotyczące uzyskania karty gościa.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Papierkowa robota',
    description: 'Przetwarzanie dokumentów dotyczących zezwolenia na pobyt i karty zezwolenia na pobyt',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Pomagamy w prowadzeniu ewidencji samochodów.',
    description: 'Pomoc w rejestracji samochodu i wymianie prawa jazdy.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Tłumaczenie dokumentów.',
    description: 'Zajmujemy się tłumaczeniem dokumentów na język polski.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Przygotowanie dokumentów.',
    description: 'Przygotowujemy dokumenty do polskiego rejestru.',
    icon: CheckBadgeIcon,
  },
]
const titleFeature = 'Dlaczego my?'
const descriptionFeature = 'Zapewniamy Ci bezpłatną konsultację wstępną, szczegółową analizę Twojej sytuacji i najlepsze rozwiązanie. Zajmujemy się całym procesem kontaktu z Uzendem i inspektorem prowadzącym sprawę. Zapisujemy skany wszystkich przesłanych dokumentów i dostarczamy potwierdzenie ich złożenia do Uzend. Kontaktujemy się z pracodawcą, wyjaśniamy szczegóły zatrudnienia i pomagamy w prawidłowym wypełnieniu wszystkich wymaganych dokumentów. Towarzyszymy sprawie do momentu wydania decyzji (decisión) i plastikowej karty.'
const titleContact = 'Po prostu zadzwoń lub napisz do nas w dowolny sposób:'
const descriptionContact = 'Dbamy o Twoje dane. Sprawdź nasze'
const privacy = 'Polityka'
const policy = 'prywatności'
const btn = 'Zamówienie na połączenie'
const labelMail = 'Twój e-mail'
const labelName = 'Twoje nazwisko'
const labelPhone = 'Twój telefon'
const contacts = [
  {
    title: 'Telefon',
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

const modalTitleSuccess = 'Dziękujemy za zgłoszenie!'
const modalTitleError = 'Błąd'
const modalSuccess = 'Skontaktujemy się z Państwem w najbliższym czasie.'
const modalError = 'Wystąpił błąd. Proszę spróbować ponownie później.'
const modalButton = 'Zamknij'
const lang = 'pl'

const reviews = [
  {
    id: 1,
    title: "Отличный сервис",
    rating: 5,
    content: `
      <p>
      Я с готовностью рекомендую данную компанию для оформления польской карты побыту для иностранцев. Сотрудники компании были очень внимательны и дружелюбны, и подошли к моему запросу со всей серьезностью и профессионализмом.</p>
      <p>TВесь процесс был очень понятным и организованным, что позволило мне получить карту побыту без каких-либо задержек или проблем. Я был приятно удивлен, насколько быстро и эффективно они работали.
        Если вам нужна помощь в оформлении польской карты побыту для иностранцев, я настоятельно рекомендую обратиться на этот сайт. Спасибо за вашу профессиональную помощь!"</p>
    `,
    author: 'Михаил',
    date: 'Май 16, 2022',
    datetime: '2022-01-06',
  },
    {
    id: 2,
    title: "Быстро и качественно",
    rating: 5,
    content: `
      <p>Я очень рада, что обратилась к услугам оформления польской карты побыту для иностранцев на данном сайте. Опыт работы сотрудников компании был на высоком уровне, они профессионально и быстро помогли мне с подачей документов и получением карты побыту. Каждый этап процесса был тщательно обдуман и организован, что позволило мне избежать лишних хлопот и стресса.</p>
      <p>Стоимость услуг также оказалась весьма доступной и не вызвала никаких неудобств. Кроме того, я ценю дружелюбный и индивидуальный подход к каждому клиенту, что создает приятную атмосферу в процессе работы. Я бы порекомендовала данную компанию всем, кто нуждается в помощи в оформлении польской карты побыту для иностранцев. Спасибо за вашу помощь и профессионализм!</p>
    `,
    author: 'Мария',
    date: 'Июля 18, 2022',
    datetime: '2022-03-08',
  },
    {
    id: 3,
    title: "Очень сильно помогли с картой побыту",
    rating: 5,
    content: `
      <p>Я бы хотел поделиться своим положительным опытом работы с этой компанией по оформлению польской карты побыту для иностранцев. Я получил всю необходимую помощь и поддержку от профессиональных сотрудников компании на каждом этапе процесса.</p>
      <p>Мне очень понравилось, как компания предоставляет индивидуальный подход к каждому клиенту и оказывает услуги на высоком уровне. Я чувствовал себя уверенно и защищенно в процессе оформления документов.
        Если вы ищете надежную компанию для оформления польской карты побыту для иностранцев, я рекомендую обратиться на этот сайт. Спасибо за профессионализм и внимание к моим потребностям!</p>
    `,
    author: 'Николай',
    date: 'Октябрь 16, 2022',
    datetime: '2022-10-10',
  },
]

export default function Lang() {
  const [ openModal, setOpenModal ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ isLoading, setIsLoading] = useState(false)
  return (
      <>
      <Head>
      <title>Parex Partners Przetwarzanie dokumentów dotyczących zezwolenia na pobyt i karty zezwolenia na pobyt</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head><main>
        <Navbar sectionReviews={'Recenzje'} sectionServices={'Usługi'} sectionAbout={'Korzyści'} sectionContact={'Kontakt'} />
        <MainSection title={titleMain} description={descriptionMain} button={buttonMain} />
        <CardList title={titleCard} cards={CARDS} />
        <FeatureSection title={titleFeature} description={descriptionFeature} features={features}/>
        <Contact lang={lang} setOpen={setOpenModal} setIsLoading={setIsLoading} setError={setError} labelName={labelName} labelMail={labelMail} labelPhone={labelPhone} contacts={contacts} title={titleContact} description={descriptionContact} privacy={privacy} btn={btn} policy={policy}/>
        <Modal modalTitleError={modalTitleError} modalTitleSuccess={modalTitleSuccess} button={modalButton} modalSuccess={modalSuccess} modalError={modalError} setOpen={setOpenModal} error={error} open={openModal} isLoading={isLoading}/>
        <Reviews reviews={reviews}/>
        <Footer lang={lang} privacy={privacy} policy={policy} description={descriptionContact}/>
      </main>
      </>
  )
}
