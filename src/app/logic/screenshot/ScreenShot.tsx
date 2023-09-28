import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/screenshot/ScreenShot.module.scss";
import {motion} from "framer-motion";
import {animationX, animationY} from "src/app/components/animation/Animation";
import {MSlider} from "src/app/components/swiper/Swiper";
import ScreenAppSrc1 from "src/resources/screen-app-1.png";
import ScreenAppSrc2 from "src/resources/screen-app-2.png";
import ScreenAppSrc3 from "src/resources/screen-app-3.png";
import ScreenAppSrc4 from "src/resources/screen-app-4.png";
import ScreenAppSrc5 from "src/resources/screen-app-5.png";

/**
 * ScreenShot section
 */
export const ScreenShot: React.FC = () => {
  const INTERFACE_STYLES = clsx(styles.interface);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  const imgArray = [ScreenAppSrc1, ScreenAppSrc2, ScreenAppSrc3, ScreenAppSrc4, ScreenAppSrc5];

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
        <span>Click 2 times to enlarge the image</span>
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
