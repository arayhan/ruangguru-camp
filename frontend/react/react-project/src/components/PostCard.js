import { useState } from "react";
import Button from "./LikeDislikeButton";

export default function PostCard({ image, caption, username, userId, date }) {
  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(456);
  const [dislikeCount, setDislikeCount] = useState(678);

  const handleClickLikeDislikeButton = (likeType) => {
    if (!isLiked && likeType === "LIKE") {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
    } else if (isLiked && likeType === "DISLIKE") {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
      setDislikeCount(dislikeCount + 1);
    }
  };

  return (
    <div aria-label="Post Card">
      <img src={image} alt="" aria-label="Post Image" />
      <div aria-label="Post Caption">{caption}</div>
      <div aria-label="Post User Name">{username}</div>
      <div aria-label="Post Date">{date}</div>

      <Button
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        isLiked={isLiked}
        isDisliked={!isLiked}
        onClickButton={handleClickLikeDislikeButton}
      />
    </div>
  );
}
