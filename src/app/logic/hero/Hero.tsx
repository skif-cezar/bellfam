import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/hero/Hero.module.scss";
import mobileAppSrc from "src/resources/mobile-app-hero.png";
import {motion} from "framer-motion";
import {animationX} from "src/app/components/animation/Animation";
import {DownloadButtons} from "src/app/components/buttons/DownloadButtons";

/**
 * Hero section
 */
export const Hero: React.FC = () => {
  const HERO_STYLES = clsx(styles.hero);
  const HERO_CONTAINER_STYLES = clsx(styles.hero__container);
  const HERO_IMG_STYLES = clsx(styles.hero__img);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);
  const POSTER_STYLES = clsx(styles.poster);
  const TEXT_CONTAINER_STYLES = clsx(styles.container);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const SUBTITLE_STYLES = clsx(styles.subtitle);
  const BORDER_STYLES = clsx(styles.border);
  const BUTTONS_STYLES = clsx(styles.buttons);

  return (
    <section className={HERO_STYLES} id="home">
      <h1 className={TITLE_HIDDEN_STYLES}>ELD Fleet Management Platform. BELLFAM</h1>
      <motion.div
        className={HERO_CONTAINER_STYLES} initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
      >
        <div className={POSTER_STYLES}>
          <span className={BORDER_STYLES}>Border</span>
          <article className={TEXT_CONTAINER_STYLES}>
            <motion.h2
              className={TITLE_STYLES} custom={2}
              variants={animationX}
            >
              A Great App Makes Your Life Better
            </motion.h2>
            <motion.p
              className={TEXT_STYLES} custom={2}
              variants={animationX}
            >
              Prevent violations with easy to use & edit electronic logbook app & compliance portal.
              Top-rated easy-to-use electronic logging devices with reliable driver
              and fleet manager support to automate FMCSA compliance.
            </motion.p>
            <motion.h4
              className={SUBTITLE_STYLES} custom={2}
              variants={animationX}
            >
              Download App Now
            </motion.h4>
            <motion.div
              className={BUTTONS_STYLES} custom={2}
              variants={animationX}
            >
              <DownloadButtons />
            </motion.div>
          </article>
        </div>
        <motion.div
          className={HERO_IMG_STYLES} custom={2}
          variants={animationX}
        >
          <img
            src={mobileAppSrc}
            alt="Screenshot of the application on a mobile device."
            width="646"
            height="725"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
