import React from "react";

function Card() {
    return (
        <div className="card-global col-3 d-flex">
            <div className="card">
                <img src="https://placehold.co/500x350" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum consectetur optio amet explicabo voluptas deleniti maiores nulla dolores eligendi laborum, non, tenetur natus iusto nesciunt ratione nobis eaque enim?</p>
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
            </div>
        </div>
    )
}

export default Card; 