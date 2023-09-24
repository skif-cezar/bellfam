import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/contact/Contact.module.scss";
import {MForm} from "src/app/components/form/Form";
import {motion} from "framer-motion";
import {animationX, animationY} from "src/app/components/animation/Animation";

/**
 * Contact section
 */
export const Contact: React.FC = () => {
  const CONTACT_STYLES = clsx(styles.contact);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const MAIL_STYLES = clsx(styles.mail);

  return (
    <motion.section
      className={CONTACT_STYLES} id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
    >
      <motion.h2
        className={TITLE_STYLES} custom={2}
        variants={animationY}
      >
        Contact us
      </motion.h2>
      <motion.div
        className={TEXT_STYLES} custom={3}
        variants={animationY}
      >
        <p>Send a message to</p>
        <address className={MAIL_STYLES}>
          <a href="mailto: Info@yourmail.com">Info@yourmail.com</a>
        </address>
        <p>or fill out the form so we can contact you.</p>
      </motion.div>
      <MForm
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
        custom={2}
        variants={animationX}
      />
    </motion.section>
  );
};
