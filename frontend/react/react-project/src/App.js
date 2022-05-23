import Navbar from "./components/Navbar";
import CardImage from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import { SessionProvider } from "./context/SessionContext";

function App() {
  const random =
    "https://example.com/" + (Math.random() + 1).toString(36).substring(2);

  return (
    <div aria-label="App">
      <SessionProvider>
        <Navbar />

        <div className="container">
          <CardImage image={random} caption={random} />
        </div>

        <UploadForm />
      </SessionProvider>
    </div>
  );
}

export default App;
