function Card(props) {
    return (
        <div class="card-group">
            <div class="card">
                <img src="https://placehold.co/500x325" class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse dicta in distinctio ratione, exercitationem provident quia illo est maiores explicabo autem rerum temporibus minus, excepturi perferendis numquam dolores. Sed!</p>
                    </div>
                    <div class="card-footer text-center">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
            </div>
        </div>
    );
}

export default Card;