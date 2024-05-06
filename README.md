# <center>react-web-player-component</center>

It's a react component to provide a seamless components to play a different type of media (GIF, video, audio).

### Usage

```bash
npm install react-web-player-component
```

```jsx
import "./App.css";
import { Player } from "react-web-player-component";
import "react-web-player-component/dist/playerControls.css";

function App() {
  return (
    <Player
      url={
        "https://res.cloudinary.com/drwviska5/video/upload/v1713686207/Trend/memes/becyf4toaabgoghlnvjp.mp4"
      }
      width={400}
      height={300}
    />
  );
}
```

### Props

| Props     | Description                                 | Default |
| --------- | ------------------------------------------- | ------- |
| url       | The URL of the video                        | -       |
| width     | The width of the video player               | -       |
| height    | The height of the video player              | -       |
| color     | The color of the video player               | red     |
| onPlay    | Callback function when video starts playing | -       |
| onPause   | Callback function when video is paused      | -       |
| onSeeking | Callback function when seeking in the video | -       |

### Contributors

We welcome and appreciate contributions from the community to enhance this project. Whether you want to report a bug, suggest a feature, or submit a pull request, your contributions are valuable to us. Here's how you can contribute:

- **Reporting Issues**: If you encounter any issues or bugs, please open an issue on GitHub with details about the problem.
- **Feature Requests**: Feel free to suggest new features or improvements by opening an issue. We would love to hear your ideas!
- **Pull Requests**: If you want to contribute directly to the codebase, submit a pull request with your changes. Make sure to follow our [Contribution Guidelines](./CONTRIBUTING.md).

Thank you for considering contributing to our project. Your help makes a difference!
