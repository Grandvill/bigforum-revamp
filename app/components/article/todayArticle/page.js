import React from "react";
import styles from "./todayArticle.module.css";
import { todayArticle } from "@/app/constant/data";

function TodayArticle() {
  return (
    <div className={styles.frameParent}>
      <div className={styles.todaysArticleParent}>
        <b className={styles.todaysArticle}>Today’s Article</b>
        <div className={styles.viewAll}>view all</div>
      </div>
      {/* Today Artikel */}
      {todayArticle.map((article, index) => (
        <div key={index} className={styles.imagesPlaceholderSquareParent}>
          <img
            className={styles.imagesPlaceholderSquare}
            alt=""
            src={article.imgPath}
          />
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolor}>{article.message}</div>
            <div className={styles.bisnisindonesiaid}>{article.source}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodayArticle;
