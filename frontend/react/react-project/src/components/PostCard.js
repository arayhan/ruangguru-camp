import { useState, useContext } from "react";
import Button from "./LikeDislikeButton";
import axios from "axios";
import { SessionContext } from "../context/SessionContext";
import { API_URL } from "../api/config";

export default function PostCard({ image, caption, username, userId, date }) {
  const { session } = useContext(SessionContext);

  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(456);
  const [dislikeCount, setDislikeCount] = useState(678);

  const handleClickLikeDislikeButton = async (postId, likeType) => {
    const res = await axios.post(`${API_URL}/${postId}/${likeType}`);
    console.log({ res });
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
