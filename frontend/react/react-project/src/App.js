import { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CardImage from './components/PostCard';
import UploadForm from './components/UploadForm';
import { API_URL } from './api/config';
import { SessionContext } from './context/SessionContext';

function App() {
  const [posts, setPosts] = useState(null);
  const { session } = useContext(SessionContext);

  const getPosts = useCallback(async () => {
    const res = await axios.get(`${API_URL}/post/list`, {
      withCredentials: true,
    });

    setPosts(res.data.data);
  }, []);

  useEffect(() => {
    if (session) getPosts();
  }, [session, getPosts]);

  return (
    <div className="bg-gray-200" aria-label="App">
      <Navbar />

      <div className="container py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts?.map(
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

      <UploadForm />
    </div>
  );
}

export default App;
