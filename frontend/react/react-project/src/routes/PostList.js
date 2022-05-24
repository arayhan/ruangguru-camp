import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AiFillWarning } from 'react-icons/ai';
import CardImage from '../components/PostCard';
import { API_URL } from '../api/config';
import { SessionContext } from '../context/SessionContext';

function PostList() {
  const session = useContext(SessionContext).session;

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const config = { withCredentials: true };
      const res = await axios.get(`${API_URL}/post/list`, config);

      setPosts(res.data.data);
    };

    if (session) getPosts();
  }, [session, setPosts]);

  return (
    <div>
      <div className="container py-8">
        {!session && (
          <div className="bg-white p-8 shadow-md rounded-md flex flex-col items-center justify-center text-center space-y-3">
            <AiFillWarning size={40} />
            <div>Please login first</div>
          </div>
        )}

        {session && posts && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {posts?.map(
              ({ id, title, author, content, image, likeCount, liked, dislikeCount, disliked, createdAt }) => (
                <CardImage
                  key={id}
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
        )}
      </div>
    </div>
  );
}

export default PostList;
