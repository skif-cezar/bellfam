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

  return (
    <section className={CONTACT_STYLES}>
      <h2 className={TITLE_STYLES}>Contact us</h2>
      <p className={TEXT_STYLES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est
        tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
        velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>
      <Form />
    </section>
  );
};
