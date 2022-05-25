import { useState, useEffect, createContext, useContext } from 'react';
import { getPosts } from '../api/post';

const PostContext = createContext({
  posts: null,
  setPosts: () => {},
});

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const handleGetPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };

    handleGetPosts();
  }, []);

  return <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>;
};

const usePost = () => useContext(PostContext);

export { PostContext, usePost, PostProvider };
