// import { Routes, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import Navbar from './components/Navbar';
import PostList from './routes/PostList';
import LikeDislikeButton from './components/LikeDislikeButton';
// import UploadForm from './components/UploadForm';

function App() {
  return (
    <SessionProvider>
      <div aria-label="App">
        <LikeDislikeButton likeCount={0} dislikeCount={289} isLiked={false} isDisliked={false} />
        <Navbar />
        <PostList />
        {/* <Routes>
        <Route index element={} />
        <Route index path="/" element={} />
        <Route path="upload" element={<UploadForm />} />
        </Routes> */}
      </div>
    </SessionProvider>
  );
}

export default App;
