import React from "react";

function Card(props) {
    return (
        <div className="card-global">
            <div className="card">
                <img src={props.imagen} className="card-img-top" alt="Madrid" />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.equipo}</h5>
                    <p className="card-text text-center"> {props.descripción}</p>
                    <div className="card-footer bg-white text-center">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card; 