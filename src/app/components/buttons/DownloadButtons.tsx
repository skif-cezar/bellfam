import React from "react";
import clsx from "clsx";
import styles from "src/app/components/buttons/DownloadButtons.module.scss";

/**
 * Download buttons component
 */
export const DownloadButtons: React.FC = () => {
  const GOOGLE_BTN_STYLES = clsx(styles.google_btn);
  const APP_STORE_BTN_STYLES = clsx(styles.appstore_btn);

  const GOOGLE_PLAY_URL = "https://play.google.com/store/search?q=bellfam&c=apps&hl=ru&gl=US";
  const APP_STORE_URL = "https://apps.apple.com/us/app/bellfam-eld/id6451947250";

  return (
    <>
      <div className={GOOGLE_BTN_STYLES}>
        <a
          href={GOOGLE_PLAY_URL} target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>
      </div>
      <div className={APP_STORE_BTN_STYLES}>
        <a
          href={APP_STORE_URL} target="_blank"
          rel="noopener noreferrer"
        >
          App Store
        </a>
      </div>
    </>
  );
};
