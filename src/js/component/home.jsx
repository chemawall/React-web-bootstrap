import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Button from "./button";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

<><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
<link rel="stylesheet" href="style.css"></link></>


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container bg-light mt-3 py-5">
			<Jumbotron />
			</div> 
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-6 col-sm-12 ">
					<Card />
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-12 ">
					<Card />					
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-12 ">
					<Card />					
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-12 ">
					<Card />					
					</div>
					
				</div>
			</div>
		</>
	);
};

export default Home;
