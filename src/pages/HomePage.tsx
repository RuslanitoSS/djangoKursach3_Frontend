import MainPageBanner from "../components/MainPageBanner/MainPageBanner";
import MainPageSection from "../components/MainPageSection/MainPageSection";

const fakeSeriesList = [
  {
    id: 1,
    title: "Нераскрытое дело",
    image: "https://i.scdn.co/image/ab67616d0000b2735b78bb1050681040dd9eafad",
  },
  {
    id: 2,
    title: "Тени прошлого",
    image: "https://i.scdn.co/image/ab67616d0000b2735b78bb1050681040dd9eafad",
  },
  {
    id: 3,
    title: "Последний свидетель",
    image: "https://i.scdn.co/image/ab67616d0000b2735b78bb1050681040dd9eafad",
  },
  {
    id: 4,
    title: "Игра теней",
    image: "https://i.scdn.co/image/ab67616d0000b2735b78bb1050681040dd9eafad",
  },
  {
    id: 5,
    title: "Запретная зона",
    image: "https://i.scdn.co/image/ab67616d0000b2735b78bb1050681040dd9eafad",
  },
  {
    id: 6,
    title: "На грани",
    image: "https://i.scdn.co/image/ab67616d0000b2735b78bb1050681040dd9eafad",
  },
];

const fakeData = [
  {
    title: "Сейчас в эфире",
    items: fakeSeriesList,
  },
  {
    title: "Сериалы для вас",
    items: fakeSeriesList,
  },
  {
    title: "Топ-10 за месяц",
    items: fakeSeriesList,
  },
  {
    title: "Фильмы для вас",
    items: fakeSeriesList,
  },
];

export default function HomePage() {
  return (
    <main>
      <MainPageBanner />
      <div className="wrapper">
        {fakeData.map((section, index) => (
          <MainPageSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </main>
  );
}
