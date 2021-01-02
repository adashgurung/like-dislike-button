import "./App.css";
import React, { useState } from "react";
/* import FavoriteIcon from "@material-ui/icons/Favorite"; */
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  /*   const increment = (event) => {
    setCount(count + 1);
    event.preventDefault();
  }; */

  return (
    <div className="app">
      <ThumbUpIcon className="like" onClick={(e) => setLikes(likes + 1)} />
      <h2>{likes}</h2>

      <ThumbDownIcon
        className="like"
        onClick={(e) => setDislikes(dislikes + 1)}
      />
      {/* <button onClick={increment}>❤️</button> */}

      <h2>{dislikes}</h2>
    </div>
  );
}

export default App;
