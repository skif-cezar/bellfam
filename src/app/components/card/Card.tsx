import React, {forwardRef} from "react";
import clsx from "clsx";
import styles from "src/app/components/card/Card.module.scss";
import {motion} from "framer-motion";

/**
 * Card props
 */
export interface CardProps {
  title: string;
  text: string;
}

/**
 * Card component
 */
export const Card: React.FC<CardProps> = forwardRef((props: CardProps, ref: any) => {
  const CARD_STYLES = clsx(styles.card);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);

  return (
    <article className={CARD_STYLES} ref={ref}>
      <h3 className={TITLE_STYLES}>{props.title}</h3>
      <p className={TEXT_STYLES}>{props.text}</p>
    </article>
  );
});

export const MCard = motion(Card);
