import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './routes/PostList';
// import UploadForm from './components/UploadForm';

function App() {
  return (
    <div aria-label="App">
      <Navbar />
      <Routes>
        {/* <Route index element={} /> */}
        <Route index path="/" element={<PostList />} />
        {/* <Route path="upload" element={<UploadForm />} /> */}
      </Routes>
    </div>
  );
}

export default App;
