import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import PostList from './routes/PostList';

function App() {
  return (
    <div className="bg-gray-200" aria-label="App">
      <Navbar />

      <Routes>
        <Route index element={<PostList />} />
        <Route path="upload" element={<UploadForm />} />
      </Routes>
    </div>
  );
}

export default App;
