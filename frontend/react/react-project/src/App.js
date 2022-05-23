import Navbar from "./components/Navbar";
import Button from "./components/LikeDislikeButton";

function App() {
  return (
    <div aria-label="App">
      <Navbar />
      <div className="container">
        <Button
          likeCount={456}
          dislikeCount={678}
          isLiked={false}
          isDisliked={true}
        />
      </div>
    </div>
  );
}

export default App;
