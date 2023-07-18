import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/layout/Layout.module.scss";

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

  return (
    <div className={WRAPPER_STYLES}>
      Hero section
      <main className={MAIN_STYLES}>
        About
        App Featyres
        App Screen Shot
        Download App Now
        How to use the appp perfectly
        Our reative team
        Our Happy Customers
        Our recent blog
      </main>
      Footer
    </div>
  );
};
