import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/screenshot/ScreenShot.module.scss";
import {motion} from "framer-motion";
import {animationX, animationY} from "src/app/components/animation/Animation";
import {MSlider} from "src/app/components/swiper/Swiper";
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
    <motion.section
      className={INTERFACE_STYLES} id="screenshot"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
    >
      <motion.h2
        className={TITLE_STYLES}
        custom={2}
        variants={animationY}
      >
        Checkout Our App Interface Look
      </motion.h2>
      <motion.p
        className={TEXT_STYLES} custom={3}
        variants={animationY}
      >
        <span>
          The screenshots show the Bellfam ELD application, which is used in the transport
          industry to track drivers&#39; working hours and compliance with safety regulations.
        </span>
        <span>
          This shows the main menu of the application, where the user can select the desired
          function, for example, view his logbook or fill out a vehicle status report.
        </span>
        <span>
          A report filling screen is also shown where the user has to fill in information
          about the vehicle, route and other details.
        </span>
      </motion.p>
      <MSlider
        images={imgArray} loopedSlides={2}
        stretch={10} depth={100}
        modifier={2.5} slidesPerView={5}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
        custom={2}
        variants={animationX}
      />
    </motion.section>
  );
};
