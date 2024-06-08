import React from "react";
import styles from "./eventComing.module.css";
import { upcomingEvent } from "@/app/constant/data";

function EventComing() {
  return (
    <>
      <div className={styles.upcomingEventParent}>
        <b className={styles.todaysMoment}>Upcoming Event</b>
        <div className={styles.viewAll1}>view all</div>
        <div className={styles.imagesPlaceholderSquareParent1}>
          <img
            className={styles.imagesPlaceholderSquare}
            alt=""
            src={upcomingEvent[0].imgPath}
          />
          <div className={styles.message}>{upcomingEvent[0].message}</div>
        </div>
        <div className={styles.imagesPlaceholderSquareParent2}>
          <img
            className={styles.imagesPlaceholderSquare}
            alt=""
            src={upcomingEvent[1].imgPath}
          />
          <div className={styles.message}>{upcomingEvent[1].message}</div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.imagesPlaceholderSquare}
            alt=""
            src={upcomingEvent[2].imgPath}
          />
          <div className={styles.message}>{upcomingEvent[2].message}</div>
        </div>
      </div>
    </>
  );
}

export default EventComing;
