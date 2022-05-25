import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../api/config';
import PostCard from '../components/PostCard';
import moment from 'moment';

function PostDetail() {
  const { postID } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    try {
      const response = axios.get(`${API_URL}/post/${postID}/detail`);
      setPost(response.data.data);
    } catch (error) {
      console.log({ error });
    }
  }, [postID]);

  return (
    <div className="container py-8">
      {!post && <div className="text-center">Loading...</div>}
      {post && (
        <div>
          <PostCard
            postId={post.id}
            username={post.author.name}
            caption={post.content}
            date={moment(post.createdAt).format('DD MMMM yyyy')}
            image={post.image}
            likeCount={post.likeCount}
            liked={post.liked}
            dislikeCount={post.dislikeCount}
            disliked={post.disliked}
          />
        </div>
      )}
    </div>
  );
}

export default PostDetail;
