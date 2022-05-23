import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

export default function LikeDislikeButton({
  id,
  isLiked,
  isDisliked,
  likeCount,
  dislikeCount,
  onClickButton,
}) {
  const likeActiveClass = "bg-primary text-white";
  const likeInactiveClass = "text-primary";
  const dislikeActiveClass = "bg-danger text-white";
  const dislikeInactiveClass = "text-danger";

  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <span className="text-sm" aria-label="Like Count">
          {likeCount}
        </span>
        <button
          className={`flex items-center space-x-2 border border-primary px-5 py-2 rounded-md ${
            isLiked ? likeActiveClass : likeInactiveClass
          }`}
          onClick={() => onClickButton(id, LikeDislikeButton.TYPES.LIKE)}
          aria-label="Like Button"
        >
          <FiThumbsUp />
          <span className="text-sm">Like</span>
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm" aria-label="Dislike Count">
          {dislikeCount}
        </span>
        <button
          className={`flex items-center space-x-2 border border-danger px-5 py-2 rounded-md ${
            isDisliked ? dislikeActiveClass : dislikeInactiveClass
          }`}
          onClick={() => onClickButton(id, LikeDislikeButton.TYPES.DISLIKE)}
          aria-label="Dislike Button"
        >
          <FiThumbsDown />
          <span className="text-sm">Dislike</span>
        </button>
      </div>
    </div>
  );
}

LikeDislikeButton.TYPES = {
  LIKE: "like",
  DISLIKE: "dislike",
  UNLIKE: "unlike",
  UNDISLIKE: "undislike",
};
