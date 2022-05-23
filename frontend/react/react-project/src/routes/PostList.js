import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CardImage from '../components/PostCard';
import { API_URL } from '../api/config';

function PostList() {
  const [posts, setPosts] = useState(null);

  const getPosts = useCallback(async () => {
    const res = await axios.get(`${API_URL}/post/list`, {
      withCredentials: true,
    });

    setPosts(res.data.data);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <div className="container py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts &&
            posts?.map(
              ({ id, title, author, content, image, likeCount, liked, dislikeCount, disliked, createdAt }) => (
                <CardImage
                  postId={id}
                  title={title}
                  username={author.name}
                  userId={author.id}
                  caption={content}
                  date={createdAt}
                  image={image}
                  likeCount={likeCount}
                  liked={liked}
                  dislikeCount={dislikeCount}
                  disliked={disliked}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default PostList;
