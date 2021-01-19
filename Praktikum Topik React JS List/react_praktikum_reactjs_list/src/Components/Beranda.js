import React, { Component } from 'react'

class Beranda extends Component {
    render() {
        return (
            <div className="container">
                <br></br><br></br><br></br>
                <div className="jumbotron">
                    <h1>Pengertian Adiwiyata</h1>
                    <p className="lead">Menurut peraturan Menteri Lingkungan Hidup Republik Indonesia Nomor 05 Tahun 2013 tentang Pedoman Pelaksanaan Program Adiwiyata mengatakan bahwa sekolah adiwiyata adalah sekolah yang peduli...</p>
                    <a className="btn btn-lg btn-primary" href="https://www.dosenpendidikan.co.id/adiwiyata-adalah/" target="blank" role="button">Info lebih lanjut &raquo;</a>
                </div>
                <div className="jumbotron bg-primary text-white">
                    <h1>Fungsi Adiwiyata</h1>
                    <p className="lead">Fungsi program adiwiyata ialah agar seluruh pelajar ikut terlibat dalam segala aktivitas persekolahan demi menuju lingkungan yang sehat serta mampu menghindari dampak lingkungan yang...</p>
                    <a className="btn btn-lg btn-warning text-white" href="https://www.dosenpendidikan.co.id/adiwiyata-adalah/" target="blank" role="button">Info lebih lanjut &raquo;</a>
                </div>
                <div className="jumbotron bg-danger text-white">
                    <h1>Tujuan Adiwiyata</h1>
                    <p className="lead">Tujuan sekolah Adiwiyata yang secara umum menerangkan untuk mewujudkan masyarakat sekolah yang peduli dan juga berbudaya dalam lingkungan dengan, menciptakan kondisi yang lebih baik bagi...</p>
                    <a className="btn btn-lg btn-primary" href="https://www.dosenpendidikan.co.id/adiwiyata-adalah/" target="blank" role="button">Info lebih lanjut &raquo;</a>
                </div>
                <div className="jumbotron bg-info text-white">
                    <h1>Tujuan Program Adiwiyata</h1>
                    <p className="lead">Menciptakan kondisi yang baik bagi sekolah untuk menjadi tempat pembelajaran dan penyadaran warga sekolah, sehingga di kemudian hari warga sekolah tersebut dapat turut bertanggung jawab...</p>
                    <a className="btn btn-lg btn-danger" href="https://www.dosenpendidikan.co.id/adiwiyata-adalah/" target="blank" role="button">Info lebih lanjut &raquo;</a>
                </div>
            </div>
        )
    }
}

export default Beranda;