import React from "react";
import clsx from "clsx";
import styles from "src/app/components/buttons/TopButton.module.scss";

/**
 * Button props
 */
export interface ButtonProps {
  /**
   * Text
   */
  text: string;

  /**
   * Callback triggered on click
   */
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

/**
 * Button component
 */
export const TopButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const BUTTON_STYLES = clsx(styles.button);
  return (
    <button
      className={BUTTON_STYLES}
      onClick={props.onClick}
      type="button"
    >
      {props.text}
    </button>
  );
};