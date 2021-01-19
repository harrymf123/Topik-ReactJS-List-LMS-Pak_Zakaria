import React from "react";
import Utama from "./Components/Utama";
import {Link} from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">React JS Router</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link"><Link to="/">Beranda</Link> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link"><Link to="/tentangsaya">Tentang Saya</Link> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link"><Link to="/karya">Karya</Link> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link"><Link to="/kontak">Kontak</Link> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link"><Link to="/list">List Modul Lama</Link> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link"><Link to="/gallery">List Gallery</Link> <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <br></br><br></br>
        <Utama />
      </div>
    )
  }
}

export default App;