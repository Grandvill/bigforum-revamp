import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0); // State untuk melacak jumlah like

  // Event handler untuk menambah jumlah like saat tombol like diklik
  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      {likes} {likes === 1 ? "like" : "likes"}
    </div>
  );
};

export default LikeButton;
