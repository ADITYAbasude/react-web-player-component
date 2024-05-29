import "./App.css";
import { Player } from "react-web-player-component";
// import 'react-web-player-component/dist/playerControls.css'

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
        onPlay={() => console.log("play")}
        onPause={() => console.log("pause")}
      />
    </div>
  );
}

export default App;
