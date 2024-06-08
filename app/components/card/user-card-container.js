import React, { useState } from "react";
import styles from "./user-card-container.module.css";
import { statusUsers } from "@/app/constant/data";

const UserCardContainer = ({ profileId, userName, index }) => {
  const statusIndex = index % statusUsers.length;
  const status = statusUsers[statusIndex].status;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentClick = () => {
    setComments(comments + 1);
  };

  const handleShareClick = () => {
    setShares(shares + 1);
  };

  const handleOptionsClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.userProfileCard}>
      <div className={styles.profileImage} />
      <div className={styles.groupItem} />
      <img className={styles.groupInner} alt="" src={profileId} />
      <div className={styles.michelleDewiParent}>
        <b className={styles.michelleDewi}>{userName}</b>
        <div className={styles.positionParent}>
          <div className={styles.position}>Position</div>
          <div className={styles.position}>•</div>
          <div className={styles.position}>Direktorat Name</div>
        </div>
      </div>
      <img
        className={styles.bithreeDotsIcon}
        alt=""
        src="/images/dasboardImages/bithreedots.svg"
        onClick={handleOptionsClick}
      />
      {showDropdown && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownOption}>Option 1</div>
          <div className={styles.dropdownOption}>Option 2</div>
          <div className={styles.dropdownOption}>Option 3</div>
        </div>
      )}
      <div className={styles.status}>{status}</div>
      <div className={styles.lineDiv} />
      <div className={styles.frameParent}>
        <div
          className={styles.antDesignlikeOutlinedParent}
          onClick={handleLikeClick}
        >
          <img
            className={`${styles.antDesignlikeOutlinedIcon} ${
              liked ? styles.likedIcon : ""
            }`}
            alt=""
            src="/images/dasboardImages/antdesignlikeoutlined.svg"
          />

          <div className={styles.like}>Like</div>

          <div className={styles.likeCount}>{likeCount}</div>
        </div>

        {/* Tombol Comment */}

        <div
          className={styles.antDesignlikeOutlinedParent}
          onClick={handleCommentClick}
        >
          <img
            className={styles.antDesignlikeOutlinedIcon}
            alt=""
            src="/images/dasboardImages/faregularcommentdots.svg"
          />

          <div className={styles.like}>Comment</div>

          <div className={styles.commentCount}>{comments}</div>
        </div>

        {/* Tombol Share */}

        <div
          className={styles.antDesignlikeOutlinedParent}
          onClick={handleShareClick}
        >
          <img
            className={styles.antDesignlikeOutlinedIcon}
            alt=""
            src="/images/dasboardImages/bxsharealt.svg"
          />

          <div className={styles.like}>Share</div>

          <div className={styles.shareCount}>{shares}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCardContainer;
