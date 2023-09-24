import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/contact/Contact.module.scss";
import {Form} from "src/app/components/form/Form";

/**
 * Contact section
 */
export const Contact: React.FC = () => {
  const CONTACT_STYLES = clsx(styles.contact);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const MAIL_STYLES = clsx(styles.mail);

  return (
    <section className={CONTACT_STYLES} id="contact">
      <h2 className={TITLE_STYLES}>Contact us</h2>
      <div className={TEXT_STYLES}>
        <p>Send a message to</p>
        <address className={MAIL_STYLES}>
          <a href="mailto: Info@yourmail.com">Info@yourmail.com</a>
        </address>
        <p>or fill out the form so we can contact you.</p>
      </div>
      <Form />
    </section>
  );
};
