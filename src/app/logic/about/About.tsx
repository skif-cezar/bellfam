import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/about/About.module.scss";
import mobileAppSrc from "src/resources/mobile-app-about.png";
import {Card} from "src/app/components/card/Card";

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
        <div className={CARDS_STYLES}>
          <Card
            title="Creative design"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
          />
          <Card
            title="easy to use"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
          />
          <Card
            title="Best user experince"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
          />
        </div>
      </div>
    </section>
  );
};