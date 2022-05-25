// import { Routes, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { PostContext, PostProvider } from './context/PostContext';
import Navbar from './components/Navbar';
import PostList from './routes/PostList';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <SessionProvider>
      <div aria-label="App">
        <Navbar />

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
        {/* <Routes>
        <Route index element={} />
        <Route index path="/" element={} />
        <Route path="upload" element={} />
        </Routes> */}
      </div>
    </SessionProvider>
  );
}

export default App;
