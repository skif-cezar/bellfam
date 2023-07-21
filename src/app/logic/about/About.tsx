import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/about/About.module.scss";
import mobileAppSrc from "src/resources/mobile-app-about.png";

/**
 * About section
 */
export const About: React.FC = () => {
  const ABOUT_STYLES = clsx(styles.about);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const CONTAINER_STYLES = clsx(styles.container);

  return (
    <section className={ABOUT_STYLES}>
      <h2 className={TITLE_STYLES}>About Our App</h2>
      <p className={TEXT_STYLES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <div className={CONTAINER_STYLES}>
        <div>
          <img
            src={mobileAppSrc}
            alt="Screenshot of the application on a mobile device."
            width="386"
            height="526"
          />
        </div>
        <div>
          <article>
            <h3>Text</h3>
            <p>dbvhdbhvbd</p>
          </article>
        </div>
      </div>
    </section>
  );
};
