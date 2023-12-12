import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/about/About.module.scss";
import mobileAppSrc from "src/resources/mobile-app-about.png";
import {motion} from "framer-motion";
import {animationX, animationY} from "src/app/components/animation/Animation";
import {MCard} from "src/app/components/card/Card";

/**
 * About section
 */
export const About: React.FC = () => {
  const ABOUT_STYLES = clsx(styles.about);
  const IMG_CONTAINER_STYLES = clsx(styles.about__img);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const CONTAINER_STYLES = clsx(styles.container);
  const CARDS_STYLES = clsx(styles.cards);

  return (
    <motion.section
      className={ABOUT_STYLES}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
    >
      <motion.h2
        className={TITLE_STYLES} custom={2}
        variants={animationY}
      >
        About Our App
      </motion.h2>
      <motion.p
        className={TEXT_STYLES} custom={3}
        variants={animationY}
      >
        Don&#39;t leave compliance to chance – BELLFAM ELD makes it easy to keep your drivers,
        vehicles, and fleet DOT-legal. BELLFAM app works with electronic logging hardware (via
        Bluetooth) and our secure fleet management cloud platform. Stay compliant with the
        Electronic Logging Device Mandate and provide your drivers with the tools to be efficient
        and successful with BELLFAM ELD.
      </motion.p>
      <motion.div
        className={CONTAINER_STYLES}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
      >
        <motion.div
          custom={2} variants={animationX}
          className={IMG_CONTAINER_STYLES}
        >
          <img
            src={mobileAppSrc}
            alt="Screenshot of the application on a mobile device."
            width="386"
            height="526"
          />
        </motion.div>
        <div className={CARDS_STYLES}>
          <MCard
            custom={2}
            variants={animationX}
            title="Multi-Channel Support 7 Days A Week"
            text="Get support when you need it the most via channels you prefer:
            phone, email, online chat or self-service support center."
          />
          <MCard
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            custom={2}
            variants={animationX}
            title="Dedicated Support Manager"
            text="Get a personalized level of support for any account size.
            Dedicated support managers are assigned to assist you with installation,
            onboarding, compliance questions, troubleshooting, and more."
          />
          <MCard
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            custom={3}
            variants={animationX}
            title="Multilingual Support Team"
            text="The multilingual team of ELD compliance experts makes communication
             easier than ever before. We speak English and Russian."
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
