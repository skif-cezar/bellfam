import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/features/Features.module.scss";
import mobileAppSrc from "src/resources/mobile-app-features.png";

/**
 * Features section
 */
export const Features: React.FC = () => {
  const FEATURES_STYLES = clsx(styles.features);
  const FEATURES_CONTAINER_STYLES = clsx(styles.features__container);
  const FEATURES_IMG_STYLES = clsx(styles.features__img);
  const CHAT_STYLES = clsx(styles.chat);
  const FEATURE_STYLES = clsx(styles.feature);
  const DESIGN_STYLES = clsx(styles.design);
  const SYSTEM_STYLES = clsx(styles.system);
  const GREAPHICS_STYLES = clsx(styles.greaphics);
  const SUPPORT_STYLES = clsx(styles.support);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  return (
    <section className={FEATURES_STYLES}>
      <h2 className={TITLE_STYLES}>App features</h2>
      <p className={TEXT_STYLES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <article className={FEATURES_CONTAINER_STYLES}>
        <div className={FEATURES_IMG_STYLES}>
          <img
            src={mobileAppSrc}
            alt="Screenshot of the application on a mobile device."
            width="375"
            height="812"
          />
        </div>
        <div className={CHAT_STYLES}>
          <h5>Full free chat</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={FEATURE_STYLES}>
          <h5>unlimiter features</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={DESIGN_STYLES}>
          <h5>awsome ui design</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={SYSTEM_STYLES}>
          <h5>iso & androind version</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={GREAPHICS_STYLES}>
          <h5>retina ready greaphics</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={SUPPORT_STYLES}>
          <h5>24/7 support by real pepole</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </article>
    </section>
  );
};
