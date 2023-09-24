import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/footer/Footer.module.scss";
/**
 * Footer component
 */
export const Footer: React.FC = () => {
  const FOOTER_STYLES = clsx(styles.footer);

  return (
    <footer className={FOOTER_STYLES}>
      <div>
        <p>
          <span className="footer_credit">
            Bellfam ELD Logbook, GPS Fleet Tracking &amp; More - © 2023 Bellfam
          </span>
        </p>
      </div>
    </footer>
  );
};
