import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/screenshot/ScreenShot.module.scss";
import {Slider} from "src/app/components/swiper/Swiper";
import IphoneSrc from "src/resources/slider-image.png";

/**
 * ScreenShot section
 */
export const ScreenShot: React.FC = () => {
  const INTERFACE_STYLES = clsx(styles.interface);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  const imgArray = [IphoneSrc, IphoneSrc, IphoneSrc, IphoneSrc, IphoneSrc];

  return (
    <section className={INTERFACE_STYLES} id="screenshot">
      <h2 className={TITLE_STYLES}>Checkout Our App Interface Look</h2>
      <p className={TEXT_STYLES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <Slider
        images={imgArray} loopedSlides={2}
        stretch={10} depth={100}
        modifier={2.5} slidesPerView={5}
      />
    </section>
  );
};
