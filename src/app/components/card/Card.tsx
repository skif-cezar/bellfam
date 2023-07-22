import React from "react";
import clsx from "clsx";
import styles from "src/app/components/card/Card.module.scss";

/**
 * Card props
 */
export interface CardProps {
  title: string;
  text: string;
}

/**
 * Card section
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  const CARD_STYLES = clsx(styles.card);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  return (
    <article className={CARD_STYLES}>
      <h3 className={TITLE_STYLES}>{props.title}</h3>
      <p className={TEXT_STYLES}>{props.text}</p>
    </article>
  );
};
