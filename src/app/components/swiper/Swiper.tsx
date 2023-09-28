import React, {forwardRef, useRef} from "react";
import {motion} from "framer-motion";
import clsx from "clsx";
import styles from "src/app/components/swiper/Swiper.module.scss";
import "src/app/components/swiper/Swiper.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType} from "swiper";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/css/zoom";
import {EffectCoverflow, Pagination, Navigation, Zoom} from "swiper/modules";

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
export const Slider: React.FC<SliderInterface> = forwardRef((props: SliderInterface, ref: any) => {
  const swiperRef = useRef<SwiperType>();

  const SLIDER_STYLES = clsx(styles.slider);
  const CONTAINER_STYLES = clsx(styles.slider__container);
  const PREV_BTN_STYLES = clsx(styles.prev);
  const NEXT_BTN_STYLES = clsx(styles.next);

  return (
    <article className={SLIDER_STYLES} ref={ref}>
      <article className={CONTAINER_STYLES}>
        <Swiper
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          effect="coverflow"
          centeredSlides
          loop
          loopedSlides={props.loopedSlides}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: props.stretch,
            depth: props.depth,
            modifier: props.modifier,
          }}
          grabCursor
          slidesPerView={props.slidesPerView}
          pagination={{clickable: true}}
          navigation={{
            prevEl: PREV_BTN_STYLES,
            nextEl: NEXT_BTN_STYLES,
          }}
          zoom
          modules={[EffectCoverflow, Pagination, Navigation, Zoom]}
          className="mySwiper"
        >
          {props.images["map"]((img: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img alt="Bellfam App" src={img} />
                </div>
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
});

export const MSlider = motion(Slider);
