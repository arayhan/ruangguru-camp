import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { getPosts } from '../api/post';

const PostContext = createContext({
  posts: null,
  handleGetPosts: null,
});

const PostProvider = ({ session, children }) => {
  const [posts, setPosts] = useState(null);

  const handleGetPosts = useCallback(() => {
    console.log('test');
    if (session) getPosts((response) => setPosts(response));
  }, [session]);

  useEffect(() => handleGetPosts(), [handleGetPosts]);

  return <PostContext.Provider value={{ posts, handleGetPosts }}>{children}</PostContext.Provider>;
};

const usePost = () => useContext(PostContext);

export { PostContext, usePost, PostProvider };
