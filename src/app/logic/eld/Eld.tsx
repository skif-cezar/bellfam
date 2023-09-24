import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/eld/Eld.module.scss";
import {Slider} from "src/app/components/swiper/Swiper";
import EldSrc1 from "src/resources/eld1.jpg";
import EldSrc2 from "src/resources/eld2.jpg";

/**
 * Eld section
 */
export const Eld: React.FC = () => {
  const INTERFACE_STYLES = clsx(styles.interface);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  const imgArray = [EldSrc1, EldSrc2];

  return (
    <section className={INTERFACE_STYLES} id="eld">
      <h2 className={TITLE_STYLES}>How Does ELD Work?</h2>
      <p className={TEXT_STYLES}>
        Electronic logging devices are connected to engine control modules (ECM) via various
        diagnostic ports and synchronized with trucks/buses, driver apps, and the fleet manager
        portal. HOS247 ELD hardware is proven to be reliable, can be installed in minutes, and
        connected to most Android/IOS smartphones and tablets via Bluetooth or USB.
      </p>
      <Slider
        images={imgArray} loopedSlides={1}
        stretch={0} depth={0}
        modifier={0} slidesPerView={1}
      />
    </section>
  );
};
