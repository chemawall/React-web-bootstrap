import React from "react";
import Button from "./button";

const Card = () => {

    return (
        <div className="card my-3 pb-3" >
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <div className="card-body justify-content-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="mx-auto">
        <Button text={"Find Out More"}/>
        </div>
      </div>
    )
}

    export default Card