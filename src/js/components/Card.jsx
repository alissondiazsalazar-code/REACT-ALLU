import React from "react";

function Card() {
    return (
        <div className="card-global d-flex">
            <div className="card">
                <img src="https://placehold.co/500x350" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum consectetur optio amet explicabo voluptas deleniti maiores nulla dolores eligendi laborum, non, tenetur natus iusto nesciunt ratione nobis eaque enim?</p>
                        <hr />
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-6">
                            <a href="#" class="btn btn-primary d-flex justify-content-center fw-bold fs-5 text py-2">Find Out More!</a>
                          </div>
                          <div className="col-3"></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Card; 