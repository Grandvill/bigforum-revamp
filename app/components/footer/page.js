import React from 'react';
import styles from '../../components/sidebar/sidebar.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.privacyParent}>
        <div className={styles.whatsOnYour}>Privacy</div>
        <div className={styles.whatsOnYour}>•</div>
        <div className={styles.whatsOnYour}>Terms</div>
        <div className={styles.whatsOnYour}>•</div>
        <div className={styles.whatsOnYour}>Language</div>
      </div>
      <div className={styles.copyright2022Container}>
        <p className={styles.allRightReserved}>Copyright © 2022</p>
        <p className={styles.allRightReserved}>All Right Reserved by Bisnis Indonesia Group</p>
      </div>
    </>
  );
}
