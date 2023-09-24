import React, {useRef} from "react";
import clsx from "clsx";
import styles from "src/app/components/swiper/Swiper.module.scss";
import "src/app/components/swiper/Swiper.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType} from "swiper";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import {Autoplay, EffectCoverflow, Pagination, Navigation} from "swiper/modules";

/**
 * Images data type
 */
export type ImagesData = {
  [key: string]: any;
};

/**
 * Slider interface
 */
interface SliderInterface {
  images: ImagesData;
  loopedSlides: number;
  stretch: number;
  depth: number;
  modifier: number;
  slidesPerView: number;
}

/**
 * Slider component
 */
export const Slider: React.FC<SliderInterface> = (props: SliderInterface) => {
  const swiperRef = useRef<SwiperType>();

  const SLIDER_STYLES = clsx(styles.slider);
  const CONTAINER_STYLES = clsx(styles.slider__container);
  const PREV_BTN_STYLES = clsx(styles.prev);
  const NEXT_BTN_STYLES = clsx(styles.next);

  // eslint-disable-next-line no-console
  console.log(props.images);

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
          loopedSlides={props.loopedSlides} // 2
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: props.stretch, // -10
            depth: props.depth, // 100
            modifier: props.modifier, // 2.5
          }}
          grabCursor
          slidesPerView={props.slidesPerView} // 5
          pagination={{clickable: true}}
          navigation={{
            prevEl: PREV_BTN_STYLES,
            nextEl: NEXT_BTN_STYLES,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {props.images["map"]((img: any, index: number) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <img alt="Bellfam App" src={img} />
              </SwiperSlide>
            );
          })}
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
