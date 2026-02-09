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

        <div className="row mx-5 mb-4">
            <div className="col-sm-12 col-md-3 mb-2">
                <Card equipo="Madrid" descripción="Los jugadores principales y referentes de la plantilla del Real Madrid para la temporada 2025/26 incluyen a figuras de talla mundial como Kylian Mbappé, Vinícius Jr., y Jude Bellingham." imagen="https://logodownload.org/wp-content/uploads/2016/03/real-madrid-logo-0.png"/>
            </div>
            <div className="col-sm-12 col-md-3 mb-2">
                <Card equipo="Manchester United" descripción="La plantilla actual del Manchester United para la temporada 2025-26 cuenta con figuras destacadas como el capitán Bruno Fernandes (centrocampista)." imagen="https://logodownload.org/wp-content/uploads/2016/10/manchester-united-logo-0.png"/>
            </div>
            <div className="col-sm-12 col-md-3 mb-2">
                <Card equipo="Sevilla" descripción="La plantilla del Sevilla FC para la temporada 2025/26 cuenta con jugadores clave como los delanteros Isaac Romero y Akor Adams, el extremo Chidera Ejuke." imagen="https://logodownload.org/wp-content/uploads/2018/11/sevilla-fc-logo-0.png" />
            </div>
            <div className="col-sm-12 col-md-3 mb-2">
                <Card equipo ="Atlético de Madrid" descripción="La plantilla del Atlético de Madrid para la temporada 2025/26 cuenta con figuras destacadas como el portero Jan Oblak, los defensas José María Giménez." imagen="https://logodownload.org/wp-content/uploads/2017/02/atletico-madrid-logo-0.png"/>
            </div>
        </div>
        <Footer/>



        </>
        
    );
};

export default Home;
