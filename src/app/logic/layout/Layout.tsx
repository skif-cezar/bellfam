import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/layout/Layout.module.scss";
import {Hero} from "src/app/logic/hero/Hero";
import {About} from "src/app/logic/about/About";
import {Header} from "src/app/components/header/Header";
import {Features} from "src/app/logic/features/Features";
import {ScreenShot} from "src/app/logic/screenshot/ScreenShot";
import {Contact} from "src/app/logic/contact/Contact";

/**
 *  Path to main page
 */
export const MAIN_PAGE_PATH = "/";

/**
 * Layout component
 */
export const Layout: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);
  const FOOTER_STYLES = clsx(styles.footer);

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <main className={MAIN_STYLES}>
        <Hero />
        <About />
        <Features />
        <ScreenShot />
        <Contact />
        How to use the appp perfectly Our reative team
        Our Happy Customers Our recent blog
      </main>
      <div className={FOOTER_STYLES}>Footer</div>
    </div>
  );
};
