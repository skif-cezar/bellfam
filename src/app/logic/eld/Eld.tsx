import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/eld/Eld.module.scss";
import {motion} from "framer-motion";
import {animationX, animationY} from "src/app/components/animation/Animation";
import {MSlider} from "src/app/components/swiper/Swiper";
import EldSrc1 from "src/resources/eld1.jpg";
import EldSrc2 from "src/resources/eld2.jpg";

/**
 * Eld section
 */
export const Eld: React.FC = () => {
  const INTERFACE_STYLES = clsx(styles.interface);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  const imgArray = [EldSrc1, EldSrc2];

  return (
    <motion.section
      className={INTERFACE_STYLES} id="eld"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
    >
      <motion.h2
        className={TITLE_STYLES} custom={2}
        variants={animationY}
      >
        How Does ELD Work?
      </motion.h2>
      <motion.p
        className={TEXT_STYLES} custom={3}
        variants={animationY}
      >
        Electronic logging devices are connected to engine control modules (ECM) via various
        diagnostic ports and synchronized with trucks/buses, driver apps, and the fleet manager
        portal. ELD hardware is proven to be reliable, can be installed in minutes, and
        connected to most Android/IOS smartphones and tablets via Bluetooth or USB.
      </motion.p>
      <MSlider
        images={imgArray} loopedSlides={1}
        stretch={0} depth={0}
        modifier={0} slidesPerView={1}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
        custom={2}
        variants={animationX}
      />
    </motion.section>
  );
};
