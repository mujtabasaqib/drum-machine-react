import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//audio files
const audios = {
  Heater1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  Heater2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  Heater3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  Heater4: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  Clap: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  OpenHH: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  KicknHat: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  Kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  ClosedHH: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
};

const keys = Object.keys(audios); //id names

const audioRefs = []; //audio ref for each audio

//9 references for 9 files
for (let i = 0; i < 9; i++) {
  audioRefs.push(React.createRef());
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Heater kit",
      volume: 50
    };
    this.playAudio = this.playAudio.bind(this);
    this.volumeControl = this.volumeControl.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown',this.handleKeyDown);
  }

  playAudio(index) {
    //updating display
    this.setState({
      display: keys[index], //audio's name
    });
    audioRefs[index].current.play(); //playing audio
  }

  volumeControl(event) {
    this.setState({
      display: "Volume: " + event.target.value,
      volume: event.target.value,
    });
  }

  handleKeyDown(event){
    switch(event.key.toLowerCase()){
      case 'q':
        this.playAudio(0);
        break;
      case 'w':
        this.playAudio(1);
        break;
      case 'e':
        this.playAudio(2);
        break;
      case 'a':
        this.playAudio(3);
        break;
      case 's':
        this.playAudio(4);
        break;
      case 'd':
        this.playAudio(5);
        break;
      case 'z':
        this.playAudio(6);
        break;
      case 'x':
        this.playAudio(7);
        break;
      case 'c':
        this.playAudio(8);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="wrapper">
        <div id="drum-machine">
          <div id="drum-pads">
            <div id="container-1">
              <button
                className="drum-pad"
                id={keys[0]}
                onClick={() => this.playAudio(0)}
              >
                Q
                <audio
                  ref={audioRefs[0]}
                  className="clip"
                  id="Q"
                  src={audios.Heater1}
                  type="audio/mpeg"
                />
              </button>
              <button
                className="drum-pad"
                id={keys[1]}
                onClick={() => this.playAudio(1)}
              >
                W
                <audio
                  ref={audioRefs[1]}
                  className="clip"
                  id="W"
                  src={audios.Heater2}
                  type="audio/mpeg"
                />
              </button>
              <button
                className="drum-pad"
                id={keys[2]}
                onClick={() => this.playAudio(2)}
              >
                E
                <audio
                  ref={audioRefs[2]}
                  className="clip"
                  id="E"
                  src={audios.Heater3}
                  type="audio/mpeg"
                />
              </button>
            </div>
            <div id="container-2">
              <button
                className="drum-pad"
                id={keys[3]}
                onClick={() => this.playAudio(3)}
              >
                A
                <audio
                  ref={audioRefs[3]}
                  className="clip"
                  id="A"
                  src={audios.Heater4}
                  type="audio/mpeg"
                />
              </button>
              <button
                className="drum-pad"
                id={keys[4]}
                onClick={() => this.playAudio(4)}
              >
                S
                <audio
                  ref={audioRefs[4]}
                  className="clip"
                  id="S"
                  src={audios.Clap}
                  type="audio/mpeg"
                />
              </button>
              <button
                className="drum-pad"
                id={keys[5]}
                onClick={() => this.playAudio(5)}
              >
                D
                <audio
                  ref={audioRefs[5]}
                  className="clip"
                  id="D"
                  src={audios.OpenHH}
                  type="audio/mpeg"
                />
              </button>
            </div>
            <div id="container-3">
              <button
                className="drum-pad"
                id={keys[6]}
                onClick={() => this.playAudio(6)}
              >
                Z
                <audio
                  ref={audioRefs[6]}
                  className="clip"
                  id="Z"
                  src={audios.KicknHat}
                  type="audio/mpeg"
                />
              </button>
              <button
                className="drum-pad"
                id={keys[7]}
                onClick={() => this.playAudio(7)}
              >
                X
                <audio
                  ref={audioRefs[7]}
                  className="clip"
                  id="X"
                  src={audios.Kick}
                  type="audio/mpeg"
                />
              </button>
              <button
                className="drum-pad"
                id={keys[8]}
                onClick={() => this.playAudio(8)}
              >
                C
                <audio
                  ref={audioRefs[8]}
                  className="clip"
                  id="C"
                  src={audios.ClosedHH}
                  type="audio/mpeg"
                />
              </button>
            </div>
          </div>
          <div id="controls">
            <h4 id="display">{this.state.display}</h4>
            <input
              type="range"
              min="0"
              max="100"
              id="slider"
              onChange={this.volumeControl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;