import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/hero/Hero.module.scss";
import {Header} from "src/app/components/header/Header";
import mobileAppSrc from "src/resources/mobile-app-hero.png";

/**
 * Hero section
 */
export const Hero: React.FC = () => {
  const HERO_STYLES = clsx(styles.hero);
  const HERO_CONTAINER_STYLES = clsx(styles.hero__container);
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

  return (
    <section className={HERO_STYLES}>
      <h1 className={TITLE_HIDDEN_STYLES}>ELD Fleet Management Platform. BELLFAM</h1>
      <Header />
      <div className={HERO_CONTAINER_STYLES}>
        <div className={POSTER_STYLES}>
          <span className={BORDER_STYLES}>Border</span>
          <article className={TEXT_CONTAINER_STYLES}>
            <h2 className={TITLE_STYLES}>A Great App Makes Your Life Better</h2>
            <p className={TEXT_STYLES}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <h4 className={SUBTITLE_STYLES}>Download App Now</h4>
            <div className={BUTTONS_STYLES}>
              <button className={GOOGLE_BTN_STYLES} type="button">Google Play</button>
              <button className={APP_STORE_BTN_STYLES} type="button">App Store</button>
            </div>
          </article>
        </div>
        <div>
          <img
            src={mobileAppSrc}
            alt="Screenshot of the application on a mobile device."
            width="646"
            height="725"
          />
        </div>
      </div>
    </section>
  );
};
