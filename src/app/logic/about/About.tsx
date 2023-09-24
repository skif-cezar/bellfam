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
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const CONTAINER_STYLES = clsx(styles.container);
  const CARDS_STYLES = clsx(styles.cards);

  return (
    <motion.section
      className={ABOUT_STYLES} id="about"
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </motion.p>
      <motion.div
        className={CONTAINER_STYLES}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
      >
        <motion.div
          custom={5}
          variants={animationX}
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
            custom={5}
            variants={animationX}
            title="Creative design"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
          />
          <MCard
            custom={6}
            variants={animationX}
            title="easy to use"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
          />
          <MCard
            custom={7}
            variants={animationX}
            title="Best user experince"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
