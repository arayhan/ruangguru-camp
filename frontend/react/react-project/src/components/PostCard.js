import axios from 'axios';
import moment from 'moment';
import Button from './LikeDislikeButton';
import { API_URL } from '../api/config';

export default function PostCard({
  postId,
  username,
  caption,
  date,
  image,
  likeCount,
  liked,
  dislikeCount,
  disliked,
}) {
  const handleClickLikeDislikeButton = async (likeType) => {
    const res = await axios.post(`${API_URL}/${postId}/${likeType}`);
    console.log({ res });
  };

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
            <div aria-label="Post Date">{moment(date).format('DD MMMM yyyy')}</div>
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
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isLiked={liked}
            isDisliked={disliked}
            onClickButton={handleClickLikeDislikeButton}
          />
        </div>
      </div>
    </div>
  );
}
