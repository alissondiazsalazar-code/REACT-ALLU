import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";

import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
function Home() {
    return (
        <>
        <NavBar/>
        <Jumbotron/>

        <div className="row mx-5 my-5">
            <div className="col">
                <Card/>
            </div>
            <div className="col">
                <Card/>
            </div>
            <div className="col">
                <Card/>
            </div>
            <div className="col">
                <Card/>
            </div>
        </div>
        <Footer/>



        </>
        
    );
};

export default Home;
