import React, { Component } from 'react'

class Beranda extends Component {
    render() {
        return (
            <div><br></br><br></br>
                <div className="jumbotron container">
                    <h1>Halaman Beranda</h1>
                    <p className="lead">Terimakasih telah mengunjungi website ini.</p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">Terimakasih &raquo;</a>
                </div>
            </div>
        )
    }
}

export default Beranda;