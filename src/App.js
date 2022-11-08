
import { useState, useEffect } from "react";
import Player from "./components/Player";
import React from 'react'




  function App() {
    
    
    const [songs] = useState([
      
                 {
                  
                    name: "Beaver Creek",
                    img_src: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
                    artist: "Aso, Middle School, Aviino",
                    src: "https://mp3.chillhop.com/serve.php/?mp3=10075",
                    color: ["#205950", "#2ab3bf"],
                    
                  },
                  {
                    name: "Daylight",
                    img_src: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
                    artist: "Aiguille",
                    src: "https://mp3.chillhop.com/serve.php/?mp3=9272",
                    color: ["#EF8EA9", "#ab417f"],
                    
                  },
                  {
                    name: "Keep Going",
                    img_src: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
                    artist: "Swørn",
                    src: "https://mp3.chillhop.com/serve.php/?mp3=9222",
                    color: ["#CD607D", "#c94043"],
                    
                  },
                  {
                    name: "Nightfall",
                    img_src: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
                    artist: "Aiguille",
                    src: "https://mp3.chillhop.com/serve.php/?mp3=9148",
                    color: ["#EF8EA9", "#ab417f"],
                    
                  },
                  {
                    name: "Reflection",
                    img_src: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
                    artist: "Swørn",
                    src: "https://mp3.chillhop.com/serve.php/?mp3=9228",
                    color: ["#CD607D", "#c94043"],
                    
                  },
                  {
                    name: "Under the City Stars",
                    img_src: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
                    artist: "Aso, Middle School, Aviino",
                    src: "https://mp3.chillhop.com/serve.php/?mp3=10074",
                    color: ["#205950", "#2ab3bf"],
                    
                  },
                
                
                 
    ]);

   

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex, songs.length])
    

      

        
      

      

      return (
        
        <div className="App">
         
         
        


          <Player
            currentSongIndex = {currentSongIndex}
            setCurrentSongIndex = {setCurrentSongIndex}
            nextSongIndex = {nextSongIndex}
            songs = {songs}
          />



          
        </div>

        
        
      );

      
    }

    
      
  
export default App;