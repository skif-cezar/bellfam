import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/features/Features.module.scss";
import mobileAppSrc from "src/resources/mobile-app-features.png";
import {motion} from "framer-motion";
import {animationX, animationY} from "src/app/components/animation/Animation";

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
    <motion.section
      className={FEATURES_STYLES}
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
    >
      <motion.h2
        className={TITLE_STYLES} custom={2}
        variants={animationY}
      >
        App features
      </motion.h2>
      <motion.p
        className={TEXT_STYLES} custom={3}
        variants={animationY}
      >
        Stay FMCSA compliant with easy to use/edit ELD app for drivers - Android & IOS supported.
      </motion.p>
      <motion.article
        className={FEATURES_CONTAINER_STYLES}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
      >
        <motion.div
          className={CHAT_STYLES}
          custom={2}
          variants={animationY}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>Multilingual Support Team</h5>
          <p>
            The multilingual team of ELD compliance experts makes communication easier than ever
            before. We speak English and Russian.
          </p>
        </motion.div>
        <motion.div
          className={FEATURE_STYLES}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
          custom={2}
          variants={animationX}
        >
          <h5>Manage/Edit Logs</h5>
          <p>Ensure HOS compliance with powerful electronic logbook management & editing.</p>
        </motion.div>
        <motion.div
          className={DESIGN_STYLES}
          custom={2}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>awesome ui design</h5>
          <p>Modern and stylish user interface design. Our application provides maximum efficiency and ease of use.</p>
        </motion.div>
        <motion.div
          className={FEATURES_IMG_STYLES} custom={2}
          variants={animationY}
        >
          <img
            src={mobileAppSrc}
            alt="Screenshot of the application on a mobile device."
            width="375"
            height="812"
          />
        </motion.div>
        <motion.div
          className={SYSTEM_STYLES}
          custom={2}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>iOS & Androind version</h5>
          <p>Get maximum efficiency and functionality with ISO and Android operating systems.</p>
        </motion.div>
        <motion.div
          className={GREAPHICS_STYLES}
          custom={2}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>Real-Time GPS Tracking</h5>
          <p>Accurately track your vehicles and plan effectively with real time GPS locations monitoring solution.</p>
        </motion.div>
        <motion.div
          className={SUPPORT_STYLES}
          custom={2}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>24/7 support by real pepole</h5>
          <p>
            Get support when you need it the most via channels you prefer: phone, email, online
            chat.
          </p>
        </motion.div>
      </motion.article>
    </motion.section>
  );
};
