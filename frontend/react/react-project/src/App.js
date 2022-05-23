import Navbar from "./components/Navbar";
import CardImage from "./components/PostCard";

function App() {
  const random =
    "https://example.com/" + (Math.random() + 1).toString(36).substring(2);

  return (
    <div aria-label="App">
      <Navbar />
      <div className="container">
        <CardImage image={random} caption={random} />
      </div>
    </div>
  );
}

export default App;
