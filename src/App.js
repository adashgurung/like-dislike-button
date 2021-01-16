import "./App.css";
import React, { useState } from "react";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

/* Functional Component */

function App() {
  const [count, setCount] = useState(0);
  /*   const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0); */

  const increment = (event) => {
    setCount(count + 1);
    /*     event.preventDefault(); */
  };

  const decrement = () => {
    setCount(count - 1);
  };

  function message(user) {
    if (user) {
      return <h1>Hello, {user} </h1>;
    }
    return <h1>Hello, Guest! </h1>;
  }

  return (
    <div className="app">
      <h1>THIS IS FUNCTIONAL COMPONENT</h1>
      <p> {message("adash ")}</p>

      <h2>{count > 5 ? "You have Fans " : "You're not Famous"} </h2>

      <div className="up">
        {/* inline function */}
        <ThumbUpIcon
          className="thumbup"
          onClick={(event) => setCount(count + 1)}
        />
        {/* <ThumbUpIcon className="thumbup" onClick={increment} /> */}
      </div>
      <h2>{count}</h2>
      <div className="down">
        {/* inline function */}
        {/*        <ThumbDownIcon  className="thumbdown"onClick={(event) => setCount(count - 1)}      /> */}
        <ThumbDownIcon className="thumbdown" onClick={decrement} />
        {/*         <button onClick={increment}>Like button❤️</button> */}
      </div>
    </div>
  );
}

export default App;
