import React, {useEffect, useState} from "react";
import {animateScroll as scroll} from "react-scroll";
import clsx from "clsx";
import styles from "src/app/logic/layout/Layout.module.scss";
import {Hero} from "src/app/logic/hero/Hero";
import {About} from "src/app/logic/about/About";
import {Header} from "src/app/components/header/Header";
import {Features} from "src/app/logic/features/Features";
import {ScreenShot} from "src/app/logic/screenshot/ScreenShot";
import {Contact} from "src/app/logic/contact/Contact";
import {Eld} from "src/app/logic/eld/Eld";
import {TopButton} from "src/app/components/buttons/TopButton";

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

  const [toTopButton, setToTopButton] = useState(false);

  // Show button when scrolling page by 600px
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    });
  }, [toTopButton]);

  // Page scroll up
  const scrollUp = (): void => {
    return scroll.scrollToTop();
  };

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <main className={MAIN_STYLES}>
        <Hero />
        <About />
        <ScreenShot />
        <Features />
        <Eld />
        <Contact />
      </main>
      <div className={FOOTER_STYLES}>Footer</div>

      {toTopButton && (
        <TopButton
          text="Top"
          onClick={() => {
            return scrollUp();
          }}
        />
      )}
    </div>
  );
};
