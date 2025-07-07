import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";

import styles from "./MainPageSection.module.scss";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

// Типизация пропсов (если используешь TypeScript, можно заменить на интерфейс)
type MainPageSectionProps = {
  title: string;
  items: {
    id: number | string;
    title: string;
    image: string;
  }[];
};

export default function MainPageSection({ title, items }: MainPageSectionProps) {
  return (
    <section className={styles.sliderSection}>
      <h2>{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode]}
        className={styles.slider}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <Link to={`/watch/${item.id}`}>
            <img src={item.image} alt={item.title} />
            </Link>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
