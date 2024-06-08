import React from "react";
import styles from "./todayMoment.module.css";
import { todayMoment, userAccount } from "@/app/constant/data";

function TodayMomentItem({ imgPath, userAccount, message }) {
  return (
    <div className={styles.momentGroup}>
      <img alt="" src={imgPath} />
      <div className={styles.userAccount}>
        <b>{userAccount} </b>
        <span>{message}</span>
      </div>
    </div>
  );
}

function TodayMoment() {
  const { imgPath: imgPath1, userAccount, message } = todayMoment[0];
  const { imgPath: imgPath2 } = todayMoment[1];
  const { imgPath: imgPath3 } = todayMoment[2];

  return (
    <div className={styles.todayMomentWrapper}>
      <b className={styles.todayMomentTitle}>Today’s Moment</b>
      <div className={styles.viewAllButton}>view all</div>
      <TodayMomentItem
        imgPath={imgPath1}
        user={userAccount}
        userAccount={userAccount}
        message={message}
      />
      <div className={styles.imageWrapper}>
        <img alt="" src={imgPath2} />
        <div>{todayMoment[1].message}</div>
      </div>
      <div className={styles.frameWrapper}>
        <img alt="" src={imgPath3} />
        <div>{todayMoment[2].message}</div>
      </div>
    </div>
  );
}

export default TodayMoment;
