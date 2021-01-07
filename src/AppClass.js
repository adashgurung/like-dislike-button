import React, { Component } from "react";
import "./App.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

/* Class based Component */

export default class App extends Component {
  constructor(props) {
    super(props);
    /* state of this component is object */
    this.state = {
      count: 0,
    };
  }

  /* inside class we dont have variables */
  /* remove any variables. below is now class functions */
  increment = (event) => {
    /* reffering to this instance of the class */
    /* instance of the class */
    this.setState({
      /* pass in object */
      count: this.state.count + 1,
      /* this instance of the class{reffering to object}.access the state.then count and increment it */
    });
  };

  /* same for the decrement */
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  message(user) {
    if (user) {
      return <h1>Hello, {user} </h1>;
    }
    return <h1>Hello, Guest! </h1>;
  }

  render() {
    return (
      <div className="app">
        <h1>THIS IS CLASS BASED COMPONENT</h1>
        <h2>
          {this.state.count > 5 ? "You have Fans " : "You're not Famous"}{" "}
        </h2>

        <div className="up">
          {/* inline function */}
          {/*  <ThumbUpIcon
            className="thumbup" onClick={(event) => setCount(count + 1)}
          /> */}
          <ThumbUpIcon className="thumbup" onClick={this.increment} />
        </div>
        <h2>You have {this.state.count} Likes</h2>
        <div className="down">
          {/* inline function */}
          {/* <ThumbDownIcon  className="thumbdown"onClick={(event) => setCount(count - 1)}      /> */}
          <ThumbDownIcon className="thumbdown" onClick={this.decrement} />
          {/*         <button onClick={increment}>Like button❤️</button> */}
        </div>
      </div>
    );
  }
}
