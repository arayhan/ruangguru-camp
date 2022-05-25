import PostList from '../components/PostList';
import UploadForm from '../components/UploadForm';
import { PostContext, PostProvider } from '../context/PostContext';

function Home() {
  return (
    <PostProvider>
      <PostContext.Consumer>
        {({ posts, setPosts }) => (
          <>
            <UploadForm onSubmit={(post) => setPosts([...posts])} />
            <PostList />
          </>
        )}
      </PostContext.Consumer>
    </PostProvider>
  );
}

export default Home;
