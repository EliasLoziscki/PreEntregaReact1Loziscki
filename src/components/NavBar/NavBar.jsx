import "./NavBar.css";
import CartWidGet from "../CartWidget/CartWidGet";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-grid justify-content-center">
        <h3 className="nombre">TEOT</h3>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-center align-items-center">
              <button className="nav-link bg-dark" href="#">
                Inicio
              </button>
              <button className="nav-link bg-dark" href="#">
                Categorias
              </button>
              <button className="nav-link bg-dark" href="#">
                Marcas
              </button>
            </div>
          </div>
          <div>
          <CartWidGet />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
