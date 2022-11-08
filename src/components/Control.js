



import{
    faPlay,
    faBackward,
    faForward,
    faPause,



} from "@fortawesome/free-solid-svg-icons";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Control(props) {
  return (
    <div className = "control">
        <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Control;