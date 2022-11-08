import React, { useState, useRef, useEffect } from "react";
import Control from "./Control";
import Details from "./Details";

function Player(props) {
    const audioE1 = useRef(null);
    const[isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      if(isPlaying) {
        audioE1.current.play()
      } else {
        audioE1.current.pause()
      }
      
    });


    
    const SkipSong = (forwards = true) => {
      if (forwards) {
        props.setCurrentSongIndex(() => {
          let temp = props.currentSongIndex;
          temp++;
          if (temp > props.songs.length - 1) {
            temp = 0;
          }
          return temp;
        });

      } else {
        props.setCurrentSongIndex(() => {
          let temp = props.currentSongIndex;
          temp--;
          if(temp< 0) {
            temp = props.song.length - 1;
          }
          return temp;

        });
      }
    };

    

    return (
    <div className = "player">
      <h4>Playing Now</h4>
      
      
      
  <Details 
  song = {props.songs[props.currentSongIndex]}/>

  <Control 
      isPlaying = {isPlaying}
      setIsPlaying = {setIsPlaying}
      SkipSong = {SkipSong}
      />
    <audio
     className ="player__audio" 
     src = {props.songs[props.currentSongIndex].src}
      ref = {audioE1}
      controls 
      > </audio>
    <p>
      Next Up: {" "}
       <span>
        {props.songs[props.nextSongIndex].title} by { " " }
        {props.songs[props.nextSongIndex].artist}
      </span>
    </p>
    </div>
  );
}

export default Player;