import { Link } from 'react-router-dom';
import Button from './LikeDislikeButton';

function PostCard({ postId, username, caption, date, image, likeCount, liked, dislikeCount, disliked }) {
  return (
    <div
      className="flex flex-col group bg-white rounded-md overflow-hidden shadow-md cursor-pointer"
      aria-label="Post Card"
    >
      <div className="h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
          src={image}
          alt=""
          aria-label="Post Image"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-3 space-y-6">
        <div className="flex-1">
          <div className="flex text-xs space-x-2">
            <div aria-label="Post Date">{date}</div>
          </div>
          <div className="" aria-label="Post Caption">
            {caption}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm" aria-label="Post User Name">
            {username}
          </div>
          <Button
            postId={postId}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isLiked={liked}
            isDisliked={disliked}
          />
        </div>
      </div>

      <hr />

      <div className="block p-3">
        <Link
          className="inline-block px-3 py-2 rounded-md w-full text-center bg-primary text-white hover:bg-primary-600 transition-all"
          to={`/post/${postId}`}
        >
          Show Detail
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
