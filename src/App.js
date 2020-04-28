import React, { Component } from 'react';
import XX from './audio/XX.mp3';
import './App.css';
import {Howl, Howler} from 'howler';
const audio = [
  {sound: XX, label: 'Monster'}
]

 class App extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  RenderButtonAndSound = () => {
    return audio.map((soundsObj, index)=>{
      return(
        <button key={index} onClick={() => this.soundPlay(soundsObj.sound)}>
          {soundsObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0)
    return (
      <div className='Sound'>
        {this.RenderButtonAndSound()}

      </div>
    )
  }
    
}

export default Sound


