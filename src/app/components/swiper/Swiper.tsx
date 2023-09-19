import React, {useRef} from "react";
import clsx from "clsx";
import styles from "src/app/components/swiper/Swiper.module.scss";
import "src/app/components/swiper/Swiper.scss";
import IphoneSrc from "src/resources/slider-image.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType} from "swiper";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import {Autoplay, EffectCoverflow, Pagination, Navigation} from "swiper/modules";

/**
 * Slider component
 */
export const Slider: React.FC = () => {
  const swiperRef = useRef<SwiperType>();

  const SLIDER_STYLES = clsx(styles.slider);
  const CONTAINER_STYLES = clsx(styles.slider__container);
  const PREV_BTN_STYLES = clsx(styles.prev);
  const NEXT_BTN_STYLES = clsx(styles.next);

  return (
    <article className={SLIDER_STYLES}>
      <article className={CONTAINER_STYLES}>
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          effect="coverflow"
          centeredSlides
          loop
          loopedSlides={2}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: -10,
            depth: 100,
            modifier: 2.5,
          }}
          grabCursor
          slidesPerView={5}
          pagination={{clickable: true}}
          navigation={{
            prevEl: PREV_BTN_STYLES,
            nextEl: NEXT_BTN_STYLES,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-1.jpg' alt="ff"
              width="319" height="622"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={IphoneSrc} alt="ff"
              width="319" height="622"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={IphoneSrc} alt="ff"
              width="319" height="622"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={IphoneSrc} alt="ff"
              width="319" height="622"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={IphoneSrc} alt="ff"
              width="319" height="622"
            />
          </SwiperSlide>
        </Swiper>
      </article>
      <div className={PREV_BTN_STYLES}>
        <button
          type="button"
          onClick={() => {
            return swiperRef.current?.slidePrev();
          }}
        >
          Prev
        </button>
      </div>
      <div className={NEXT_BTN_STYLES}>
        <button
          type="button"
          onClick={() => {
            return swiperRef.current?.slideNext();
          }}
        >
          Next
        </button>
      </div>
    </article>
  );
};
