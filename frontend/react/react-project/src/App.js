import { Routes, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import Navbar from './components/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <SessionProvider>
      <div aria-label="App">
        <Navbar />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<Home />} />
        </Routes>
      </div>
    </SessionProvider>
  );
}

export default App;
