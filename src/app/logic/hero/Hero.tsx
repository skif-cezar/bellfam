import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/hero/Hero.module.scss";
import mobileAppSrc from "src/resources/mobile-app-hero.png";
import {motion} from "framer-motion";
import {animationX} from "src/app/components/animation/Animation";

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
  const GOOGLE_BTN_STYLES = clsx(styles.google_btn);
  const APP_STORE_BTN_STYLES = clsx(styles.appstore_btn);

  const GOOGLE_PLAY_URL = "https://play.google.com/store/search?q=bellfam&c=apps&hl=ru&gl=US";
  const APP_STORE_URL = "https://apps.apple.com/us/app/bellfam-eld/id6451947250";

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
              className={TITLE_STYLES} custom={1}
              variants={animationX}
            >
              A Great App Makes Your Life Better
            </motion.h2>
            <motion.p
              className={TEXT_STYLES} custom={2}
              variants={animationX}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
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
              <div className={GOOGLE_BTN_STYLES}>
                <a
                  href={GOOGLE_PLAY_URL} target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
              </div>
              <div className={APP_STORE_BTN_STYLES}>
                <a
                  href={APP_STORE_URL} target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </div>
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
