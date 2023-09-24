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
      className={FEATURES_STYLES} id="features"
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </motion.p>
      <motion.article
        className={FEATURES_CONTAINER_STYLES} initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
      >
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
          className={CHAT_STYLES} custom={2}
          variants={animationY}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>Full free chat</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
        <motion.div
          className={FEATURE_STYLES} initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}} custom={5}
          variants={animationX}
        >
          <h5>unlimiter features</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
        <motion.div
          className={DESIGN_STYLES} custom={6}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>awsome ui design</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
        <motion.div
          className={SYSTEM_STYLES} custom={5}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>iso & androind version</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
        <motion.div
          className={GREAPHICS_STYLES} custom={6}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>retina ready greaphics</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
        <motion.div
          className={SUPPORT_STYLES} custom={7}
          variants={animationX}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once: true}}
        >
          <h5>24/7 support by real pepole</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
      </motion.article>
    </motion.section>
  );
};
