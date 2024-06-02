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
import Slider from "react-slick";
import Contact from "@/components/Contact";
import Modal from "@/components/Modal";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Octavia from "../../img/octavia.png";
import Fabia from "../../img/fabia.png";
import Passat from "../../img/passat.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CARDS: CardDescription[] = [
  {
    name: "Гражданство",
    imageSrc: pass,
    description:
      "Карта побыту – это первый шаг к получению Польского гражданства.",
  },
  {
    name: "Карты побыту для семьи",
    imageSrc: cardPass,
    description:
      "Члены вашей семьи также смогут получить карты на основе вашего ВНЖ или ПМЖ",
  },
  {
    name: "Путешествие",
    imageSrc: travel,
    description:
      "Возможность пребывания в других странах Шенгенской зоны без визы.",
  },
  {
    name: "Регистрация автомобиля",
    imageSrc: car,
    description: "С картой побыту вы сможете зарегистрировать свой автомобиль",
  },
  {
    name: "Программа 500+",
    imageSrc: social,
    description:
      "500+ злотых каждый месяц Получайте социальную помощь до совершеннолетия ребенка",
  },
  {
    name: "Возможность кредитования",
    imageSrc: credit,
    description:
      "С картой побыту, для вас будет доступно кредитование в Польских банках.",
  },
  {
    name: "Легальное трудоустройство",
    imageSrc: job,
    description:
      "Вы сможете легально работать на территории Польской Републики",
  },
];
const titleMain = "Parex Partners";
const buttonMain = "Заказать звонок";
const descriptionMain =
  "Консультационные услуги и помощь в получении карты побыту в Великопольском воеводстве";
const titleCard = "ВОЗМОЖНОСТИ КАРТЫ ПОБЫТУ";

const features = [
  {
    name: "Бесплатная первичная консультация.",
    description: "Бесплатная консультация по получению карты побыту.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Оформление документов",
    description: "Оформление документов для карты побыту ВНЖ и ПМЖ",
    icon: CheckBadgeIcon,
  },
  {
    name: "Помогаем в реестре автомобилей.",
    description:
      "Помощь в регистрации автомобиля и замене водительского удостоверения.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Перевод документов.",
    description: "Делаем переводы документов на польский язык.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Подготовка документов .",
    description: "Подготавливаем документы для польского регистра.",
    icon: CheckBadgeIcon,
  },
];
const titleFeature = "Почему мы?";
const descriptionFeature =
  "Мы предоставляем вам бесплатную первичную консультацию подробный анализ вашей ситуации и подбор оптимального решения. Берем на себя весь процесс контакта с Ужендом и инспектором, который ведет дело. Сохраняем сканы всех отправленных документов и предоставим подтверждение подачи в Уженд.Свяжемся с работодателем, уточним детали по трудоустройству и поможем правильно заполнить все необходимые документы. Сопровождаем дело до выдачи решения (децизии) и пластиковой карты.";
const titleContact =
  "Просто позвоните нам или напишите любым удобным способом:";
const descriptionContact = "Мы заботимся о ваших данных. Ознакомьтесь с нашей";
const privacy = "Политикой";
const policy = "конфиденциальности";
const btn = "Заказать звонок";
const labelMail = "Ваш email";
const labelName = "Ваше имя";
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
const modalTitleSuccess = "Спасибо за заявку!";
const modalTitleError = "Ошибка";
const modalSuccess = "Мы свяжемся с вами в ближайшее время.";
const modalError = "Произошла ошибка. Попробуйте позже.";
const modalButton = "Закрыть";
const lang = "ru";

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
    author: "Михаил",
    date: "Май 16, 2022",
    datetime: "2022-01-06",
  },
  {
    id: 2,
    title: "Быстро и качественно",
    rating: 5,
    content: `
      <p>Я очень рада, что обратилась к услугам оформления польской карты побыту для иностранцев на данном сайте. Опыт работы сотрудников компании был на высоком уровне, они профессионально и быстро помогли мне с подачей документов и получением карты побыту. Каждый этап процесса был тщательно обдуман и организован, что позволило мне избежать лишних хлопот и стресса.</p>
      <p>Стоимость услуг также оказалась весьма доступной и не вызвала никаких неудобств. Кроме того, я ценю дружелюбный и индивидуальный подход к каждому клиенту, что создает приятную атмосферу в процессе работы. Я бы порекомендовала данную компанию всем, кто нуждается в помощи в оформлении польской карты побыту для иностранцев. Спасибо за вашу помощь и профессионализм!</p>
    `,
    author: "Мария",
    date: "Июля 18, 2022",
    datetime: "2022-03-08",
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
    author: "Николай",
    date: "May 16, 2022",
    datetime: "2022-10-10",
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
          Parex Partners Оформление документов для карты побыту ВНЖ и ПМЖ
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar
          sectionAbout="Выгоды"
          sectionContact="Связаться"
          sectionReviews="Отзывы"
          sectionServices="Услуги"
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
