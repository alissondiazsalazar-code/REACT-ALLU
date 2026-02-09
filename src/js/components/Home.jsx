import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";

//create your first component
function Home() {
    return (
        <>
        <NavBar/>
        <Jumbotron/>

        <Card/>
        <Footer/>



        </>
        
    );
};

export default Home;
