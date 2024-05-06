import "./App.css";
import { Player } from "react-wplayer";
import "react-wplayer/dist/playerControls.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Player
        url={
          "https://res.cloudinary.com/drwviska5/video/upload/v1713686207/Trend/memes/becyf4toaabgoghlnvjp.mp4"
        }
        width={400}
        height={300}
      />
    </div>
  );
}

export default App;
