import Navbar from "@/components/Navbar";
import Head from "next/head";
import React, { useState } from "react";
import CardList from "@/components/CardList";
import { CardDescription } from "@/components/CardList";
import MainSection from "@/components/MainSection";
import car from "../../img/icons/car.png";
import cardPass from "../../img/icons/cardPass.png";
import credit from "../../img/icons/credit.png";
import job from "../../img/icons/job.png";
import pass from "../../img/icons/pass.png";
import social from "../../img/icons/social.png";
import travel from "../../img/icons/travel.png";
import mail from "../../img/icons/gmail.png";
import phone from "../../img/icons/phone-call.png";
import telegram from "../../img/icons/telegram.png";
import whatsapp from "../../img/icons/whatsapp.png";
import viber from "../../img/icons/viber.png";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import FeatureSection from "@/components/FeatureSection";
import Contact from "@/components/Contact";
import Modal from "@/components/Modal";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Octavia from "../../img/octavia.png";
import Fabia from "../../img/fabia.png";
import Passat from "../../img/passat.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CARDS: CardDescription[] = [
  {
    name: "Громадянство",
    imageSrc: pass,
    description:
      "Карта побуту – це перший крок до отримання Польського громадянства.",
  },
  {
    name: "Карти побуту для сім'ї",
    imageSrc: cardPass,
    description:
      "Члени вашої родинитакож зможуть отриматикарти на основі вашого ВНЖ або ПМП",
  },
  {
    name: "Подорож",
    imageSrc: travel,
    description:
      "Можливість перебування в інших країнах Шенгенськоїзони без візи.",
  },
  {
    name: "Реєстрація автомобіля",
    imageSrc: car,
    description: "З картою побуту ви зможете зареєструвати свій автомобіль",
  },
  {
    name: "Програма 500+",
    imageSrc: social,
    description:
      "500+ злотих щомісяцяОтримуйте соціальнудопомога до повноліття дитини",
  },
  {
    name: "Можливість кредитування",
    imageSrc: credit,
    description:
      "З картою побуту, вам буде доступне кредитування в Польські банки.",
  },
  {
    name: "Легальне працевлаштування",
    imageSrc: job,
    description:
      "Ви зможете легально працювати на території Польської Республіки",
  },
];
const titleCard = "МОЖЛИВОСТІ КАРТИ ПОБИТУ";
const titleMain = "Parex Partners";
const buttonMain = "Замовити дзвінок";
const descriptionMain =
  "Консультаційні послуги та допомога в отриманні карти побуту у Великопольському воєводстві";
const features = [
  {
    name: "Безкоштовна первинна консультація.",
    description: "Безкоштовна консультація щодо отримання карти побиту.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Оформлення документів",
    description: "Оформлення документів для карти побиту ВНЖ і ПМП",
    icon: CheckBadgeIcon,
  },
  {
    name: "Допомагаємо в реєстрі автомобілів.",
    description:
      "Допомога в реєстрації автомобіля та заміні водійського посвідчення.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Переклад документів.",
    description: "Робимо переклади документів на польську мову.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Підготовка документів.",
    description: "Готуємо документи для польського регістра.",
    icon: CheckBadgeIcon,
  },
];
const titleFeature = "Чому ми?";
const descriptionFeature =
  "Ми надаємо вам безкоштовну первинну консультацію, детальний аналіз вашої ситуації та підбір оптимального рішення. Беремо на себе весь процес контакту з Ужендом та інспектором, який веде справу. Зберігаємо скани всіх відправлених документів і надамо підтвердження подачі в Уженд. Зв'язуємося з роботодавцем, уточнимо деталі з працевлаштування та допоможемо правильно заповнити всі необхідні документи. Супроводжуємо справу до видачі рішення (децизії) і пластикової карти.";
const titleContact =
  "Просто зателефонуйте нам або напишіть будь-яким зручним способом:";
const descriptionContact = "Ми піклуємося про ваші дані. Ознайомтеся з нашою";
const privacy = "Політикою";
const policy = "конфіденційність";
const btn = "Замовити дзвінок";
const labelMail = "Ваш email";
const labelName = "Ваше ім'я";
const labelPhone = "Ваш телефон";
const contacts = [
  {
    title: "Телефон",
    contact: "+48 728 482 157 ",
    img: phone,
  },
  {
    title: "Email",
    contact: "parex-partners@gmail.com",
    img: mail,
  },
  {
    title: "WhatsApp",
    contact: "+48 728 482 157 ",
    img: whatsapp,
  },
  {
    title: "Telegram",
    contact: "+48 728 482 157 ",
    img: telegram,
  },
  {
    title: "Viber",
    contact: "+48 728 482 157 ",
    img: viber,
  },
];
const modalTitleSuccess = "Дякую за заявку!";
const modalTitleError = "Помилка";
const modalSuccess = "Ми зв'яжемося з вами найближчим часом.";
const modalError = "Сталася помилка. Спробуйте пізніше.";
const modalButton = "Закрити";
const lang = "ua";

const reviews = [
  {
    id: 1,
    title: "Дуже гарна робота!",
    rating: 5,
    content: `
      <p>Дуже задоволений роботою компанії з оформлення польської карти перебування для іноземців. Професійний підхід та увага до деталей зробили весь процес дуже легким та зрозумілим. Я отримав необхідну допомогу та консультації на кожному етапі процесу, що було дуже важливо для мене.</p>
      <p>Компанія дотримувалася всіх вимог та термінів, що сприяло швидкому та успішному оформленню карти перебування. Я рекомендую цю компанію для всіх, хто шукає надійного партнера для оформлення польської карти перебування для іноземців.</p>
    `,
    author: "Петр",
    date: "Травень 4, 2022",
    datetime: "2022-01-06",
  },
  {
    id: 2,
    title: "Швидко та якісно",
    rating: 5,
    content: `
      <p>Я хотів би поділитися своїм досвідом співпраці з компанією, яка займається оформленням польських карт перебування для іноземців. Я отримав від професійних працівників компанії необхідну допомогу та підтримку на кожному етапі процесу.</p>
      <p>Мені дуже сподобалось, як компанія надає індивідуальний підхід до кожного клієнта та надає послуги на високому рівні. Я почував себе впевнено та захищено в процесі оформлення документів.
      Я раджу цю компанію як надійного партнера для оформлення польської карти перебування для іноземців. Дякую за професіоналізм та увагу до моїх потреб!"</p>
    `,
    author: "Марія",
    date: "Липня 3, 2022",
    datetime: "2022-02-07",
  },
  {
    id: 3,
    title: "Мені все сподобалося",
    rating: 5,
    content: `
      <p>Я хочу висловити своє задоволення співпрацею з компанією, що займається оформленням польських карт перебування для іноземців. Професійний підхід та уважність до кожної деталі процесу вражає.
        Команда компанії була дуже дружелюбною та відкритою в комунікації. Я отримав від них не тільки необхідну допомогу в оформленні документів, але й чудові поради щодо перебування в Польщі.</p>
      <p>Я був приємно здивований швидкістю та якістю роботи компанії. Якщо вам потрібна допомога в оформленні польської карти перебування для іноземців, я рекомендую звернутися до цієї компанії. Дякую за вашу професіоналізм та відмінне обслуговування!</p>
    `,
    author: "Микола",
    date: "Жовтень 16, 2022",
    datetime: "2022-10-18",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Lang() {
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Head>
        <title>
          Parex Partners Оформлення документів для карти побиту ВНЖ і ПМП
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar
          sectionAbout="Вигоди"
          sectionContact="Зв'язатися"
          sectionReviews="Відгуки"
          sectionServices="Послуги"
        />
        <div className="w-full">
          <Slider {...settings}>
            <MainSection
              button={buttonMain}
              title={titleMain}
              description={descriptionMain}
              img={Octavia}
              alt="Octavia"
            />
            <MainSection
              button={buttonMain}
              title={titleMain}
              description={descriptionMain}
              img={Fabia}
              alt="Fabia"
            />
            <MainSection
              button={buttonMain}
              title={titleMain}
              description={descriptionMain}
              img={Passat}
              alt="Passat"
            />
          </Slider>
        </div>
        <CardList title={titleCard} cards={CARDS} />
        <FeatureSection
          title={titleFeature}
          description={descriptionFeature}
          features={features}
        />
        <Contact
          lang={lang}
          setOpen={setOpenModal}
          setIsLoading={setIsLoading}
          setError={setError}
          labelName={labelName}
          labelMail={labelMail}
          labelPhone={labelPhone}
          contacts={contacts}
          title={titleContact}
          description={descriptionContact}
          privacy={privacy}
          btn={btn}
          policy={policy}
        />
        <Modal
          modalTitleError={modalTitleError}
          modalTitleSuccess={modalTitleSuccess}
          button={modalButton}
          modalSuccess={modalSuccess}
          modalError={modalError}
          setOpen={setOpenModal}
          error={error}
          open={openModal}
          isLoading={isLoading}
        />
        <Reviews reviews={reviews} />
        <Footer
          lang={lang}
          privacy={privacy}
          policy={policy}
          description={descriptionContact}
        />
      </main>
    </>
  );
}
