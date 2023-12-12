import React from "react";
import clsx from "clsx";
import styles from "src/app/components/header/Header.module.scss";
import {Menu} from "src/app/components/menu/Menu";

/**
 * Header component
 */
export const Header: React.FC = () => {
  const HEADER_STYLES = clsx(styles.header);
  const LOGO_STYLES = clsx(styles.logo);
  const MAIL_STYLES = clsx(styles.mail);

  return (
    <header className={HEADER_STYLES}>
      <div className={LOGO_STYLES}>
        <a href="/">BELLFAM</a>
      </div>
      <address className={MAIL_STYLES}>
        <a href="mailto: Info@yourmail.com">Info@yourmail.com</a>
      </address>
      <Menu />
    </header>
  );
};
