import React from "react";
// import logo from './logo.svg';
import "./App.css";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";

class App extends React.Component {
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      currentMeme: {
        titre: "titre",
        text: " text",
        x: 50,
        y: 50,
        color: "red",
        underline: true,
        italic: true,
        fontWeight: "900",
        fontSize: 24,
        fx: 100,
        fy: 100,
        imageId: 0,
      },
      images: [
        {
          id: 0,
          titre: "futurama1",
          url: "img/memeImage/futurama1.jpg",
          w: 1200,
          h: 637,
        },
      ],
    };
  }
  componentDidUpdate() {}
  render() {
    return (
      <>
      <div className="App">
      <FlexLayout>
        <MemeViewer
          meme={this.state.currentMeme}
          img={this.state.images.find(
            (e) => e.id === this.state.currentMeme.imageId
          )}
        />
        <MemeForm/>
        </FlexLayout>
      </div>
      <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}

export default App;
