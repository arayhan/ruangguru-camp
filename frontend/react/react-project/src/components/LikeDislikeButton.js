import { useEffect, useState } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { postLikeDislike } from '../api/post';
import { usePost } from '../context/PostContext';

export default function LikeDislikeButton({ postId, isLiked, isDisliked, likeCount, dislikeCount }) {
  const handleGetPosts = usePost().handleGetPosts;

  const [likeCountState, setLikeCountState] = useState(likeCount);
  const [dislikeCountState, setDislikeCountState] = useState(dislikeCount);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [isDislikedState, setIsDislikedState] = useState(isDisliked);

  const likeActiveClass = 'bg-primary text-white';
  const likeInactiveClass = 'text-primary hover:bg-primary hover:bg-opacity-10';
  const dislikeActiveClass = 'bg-danger text-white';
  const dislikeInactiveClass = 'text-danger hover:bg-danger hover:bg-opacity-10';

  const handleClickLikeDislike = (type) => {
    if (type === LikeDislikeButton.TYPES.LIKE) {
      if (isLikedState) {
        setLikeCountState(likeCountState - 1);
        setIsLikedState(false);
      } else {
        setLikeCountState(likeCountState + 1);
        setIsLikedState(true);
      }

      if (isDislikedState) {
        setDislikeCountState(dislikeCountState - 1);
        setIsDislikedState(false);
      }
    } else {
      if (isDislikedState) {
        setDislikeCountState(dislikeCountState - 1);
        setIsDislikedState(false);
      } else {
        setDislikeCountState(dislikeCountState + 1);
        setIsDislikedState(true);
      }

      if (isLikedState) {
        setLikeCountState(likeCountState - 1);
        setIsLikedState(false);
      }
    }

    // postLikeDislike(postId, { type }, () => handleGetPosts());
  };

  return (
    <div className="flex items-center justify-end space-x-3">
      <div className="flex items-center space-x-2">
        <button
          className={`flex items-center space-x-2 transition-all border border-primary px-3 py-2 rounded-md ${
            isLikedState ? likeActiveClass : likeInactiveClass
          }`}
          onClick={() => handleClickLikeDislike(LikeDislikeButton.TYPES.LIKE)}
          aria-label="Like Button"
        >
          <span className="text-xs" aria-label="Like Count">
            {likeCountState}
          </span>
          <FiThumbsUp />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className={`flex items-center space-x-2 transition-all border border-danger px-3 py-2 rounded-md ${
            isDislikedState ? dislikeActiveClass : dislikeInactiveClass
          }`}
          onClick={() => handleClickLikeDislike(LikeDislikeButton.TYPES.DISLIKE)}
          aria-label="Dislike Button"
        >
          <span className="text-xs" aria-label="Dislike Count">
            {dislikeCountState}
          </span>
          <FiThumbsDown />
        </button>
      </div>
    </div>
  );
}

LikeDislikeButton.TYPES = {
  LIKE: 'like',
  DISLIKE: 'dislike',
};
