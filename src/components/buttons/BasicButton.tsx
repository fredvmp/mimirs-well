import type { FC } from "react";
import styles from './BasicButton.module.css';

interface Props {
  title: string;

}

/* export default function BasicButton({Props}) {
  return (
    <div className={styles.wrapBasicButton}>
        <p>{Props.title}</p>

    </div>  
  );
} */

export const BasicButton = ( {title}: Props ) => {

  return (
    <div className={styles.wrapBasicButton}>
        <p>{title}</p>

    </div>  
  )

}


