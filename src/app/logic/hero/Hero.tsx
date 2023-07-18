import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/hero/Hero.module.scss";
import {Header} from "src/app/components/header/Header";

/**
 * Hero section
 */
export const Hero: React.FC = () => {
  const HERO_STYLES = clsx(styles.hero);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);

  return (
    <section className={HERO_STYLES}>
      <h1 className={TITLE_HIDDEN_STYLES}>ELD Fleet Management Platform. BELLFAM</h1>
      <Header />
    </section>
  );
};
