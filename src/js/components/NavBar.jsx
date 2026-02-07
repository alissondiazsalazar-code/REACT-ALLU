function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
            <div className="container-sm">
                <nav className="navbar navbar-end navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                    <div className="bg-dark p-4">
                        <h5 className="text-body-emphasis h4">Home</h5>
                        <h5 className="text-body-emphasis h4">About</h5>
                        <h5 className="text-body-emphasis h4">Services</h5>
                        <h5 className="text-body-emphasis h4">Contact</h5>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;