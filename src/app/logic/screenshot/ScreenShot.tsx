import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/screenshot/ScreenShot.module.scss";
import IphoneSrc from "src/resources/slider-image.png";

/**
 * ScreenShot section
 */
export const ScreenShot: React.FC = () => {
  const INTERFACE_STYLES = clsx(styles.interface);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const SLIDER_STYLES = clsx(styles.slider);
  const CONTAINER_STYLES = clsx(styles.slider__container);
  const IMAGE_STYLES = clsx(styles.slider__image);
  const PREV_BTN_STYLES = clsx(styles.prev);
  const NEXT_BTN_STYLES = clsx(styles.next);

  return (
    <section className={INTERFACE_STYLES}>
      <h2 className={TITLE_STYLES}>Checkout Our App Interface Look</h2>
      <p className={TEXT_STYLES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <article className={SLIDER_STYLES}>
        <article className={CONTAINER_STYLES}>
          <div className={IMAGE_STYLES}>
            <img
              src={IphoneSrc} alt="ff"
              width="319" height="622"
            />
          </div>
        </article>
        <div className={PREV_BTN_STYLES}>
          <button type="button">Prev</button>
        </div>
        <div className={NEXT_BTN_STYLES}>
          <button type="button">Next</button>
        </div>
      </article>
    </section>
  );
};
