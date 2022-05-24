import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { postLikeDislike } from '../api/post';
import { usePost } from '../context/PostContext';

export default function LikeDislikeButton({ postId, isLiked, isDisliked, likeCount, dislikeCount }) {
  const handleGetPosts = usePost().handleGetPosts;

  const likeActiveClass = 'bg-primary text-white';
  const likeInactiveClass = 'text-primary hover:bg-primary hover:bg-opacity-10';
  const dislikeActiveClass = 'bg-danger text-white';
  const dislikeInactiveClass = 'text-danger hover:bg-danger hover:bg-opacity-10';

  const handleClickLikeDislike = (type) => {
    postLikeDislike(postId, { type }, () => handleGetPosts());
  };

  return (
    <div className="flex items-center justify-end space-x-3">
      <div className="flex items-center space-x-2">
        <button
          className={`flex items-center space-x-2 transition-all border border-primary px-3 py-2 rounded-md ${
            isLiked ? likeActiveClass : likeInactiveClass
          }`}
          onClick={() => handleClickLikeDislike(LikeDislikeButton.TYPES.LIKE)}
          aria-label="Like Button"
        >
          <span className="text-xs" aria-label="Like Count">
            {likeCount}
          </span>
          <FiThumbsUp />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className={`flex items-center space-x-2 transition-all border border-danger px-3 py-2 rounded-md ${
            isDisliked ? dislikeActiveClass : dislikeInactiveClass
          }`}
          onClick={() => handleClickLikeDislike(LikeDislikeButton.TYPES.DISLIKE)}
          aria-label="Dislike Button"
        >
          <span className="text-xs" aria-label="Dislike Count">
            {dislikeCount}
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
  UNLIKE: 'unlike',
  UNDISLIKE: 'undislike',
};
