import React from "react";
import Button from "./button";

const Jumbotron = () => {

    return (
        <div className="jumbotron jumbotron-fluid">
  
    <h1>A Warm Welcome!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien vitae justo feugiat vulputate at eu mi. Etiam ac purus vitae metus maximus scelerisque nec eget libero. Vivamus sagittis est quis mi lobortis, vel gravida erat eleifend.</p>
    <Button text={"Call to action!"} />
</div>
    )
}

    export default Jumbotron