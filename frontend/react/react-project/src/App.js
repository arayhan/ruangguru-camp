import { Routes, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import Navbar from './components/Navbar';
import PostList from './routes/PostList';
import PostDetail from './routes/PostDetail';
import Profile from './routes/Profile';

function App() {
  return (
    <SessionProvider>
      <div aria-label="App">
        <Navbar />

        <Routes>
          <Route index path="/" element={<PostList />} />
          <Route path="/post/:postID" element={<PostDetail />} />
          <Route path="/profile/:userID" element={<Profile />} />
        </Routes>
      </div>
    </SessionProvider>
  );
}

export default App;
