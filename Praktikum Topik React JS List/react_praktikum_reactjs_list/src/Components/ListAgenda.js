import React, { Component } from 'react'
import $ from "jquery";

class ListAgenda extends Component {
    constructor(){  
        super();  
        this.state = {  
            agenda : [  
                {no: 1, tanggal: "10 JANUARI", kegiatan: "Hari Perencanaan Gerakan 1 Juta Pohon"},  
                {no: 2, tanggal: "2 FEBRUARI", kegiatan: "Hari Lahan Basah Se Dunia"},  
                {no: 3, tanggal: "21 FEBRUARI", kegiatan: "Hari Peduli Sampah Nasional"},  
            ],  

            no: 0,  
            tanggal: "",  
            kegiatan: "",
            action: "" 
        }  
    }  

    bind = (event) => {  
        this.setState({[event.target.name]: event.target.value});  
        /* fungsi ini digunakan untuk memasukkan data dari elemen input 
        ke variable state. 
        contoh ketika input nis diisi, maka secara otomatis variabel nis 
        pada state bernilai sesuai dengan inputan 
        */  
    }
    
    Edit = (item) => {  
        this.setState({    
            no: item.no, 
            tanggal: item.tanggal,  
            kegiatan: item.kegiatan,  
            action: "update"  
        });  
    }  

    Drop = (index) => {  
      // temp digunakan untuk menyimpan sementara  
      // data array agenda  
        let temp = this.state.agenda;  
        
        // menghapus data pada index yang dihapus  
        temp.splice(index,1);  
        
        // array agenda diupdate dengan nilai data temp  
        this.setState({agenda: temp});  
    }  
    
    Add = () => {  
      // mengosongkan nilai nis, nama, dan alamat  
      // pada saat tombol add ditekan 
        let angka = this.state.agenda;
        let angkaupdate = angka.length;
        this.setState({  
            no: ++angkaupdate,  
            tanggal: "",  
            kegiatan: "",
            action: "insert" 
        });  
    }  

    SaveAgenda = (event) =>{  
        event.preventDefault();  
        // temp digunakan untuk menyimpan sementara  
        // data array agenda  
        let temp = this.state.agenda;  
        
        if (this.state.action === "insert") {  
            // temp akan ditambahkan dengan data agenda yang baru  
            // sesuai dengan data yang dimasukkan pada form  
            temp.push({  
                no: this.state.no,  
                tanggal: this.state.tanggal,  
                kegiatan: this.state.kegiatan  
            });  
        } else if (this.state.action === "update") {  
            // mencari index data yang akan diubah  
            let index = temp.findIndex(item => item.no === this.state.no);  
            // mengubah data array sesuai dengan masukan pada form  
            temp[index].tanggal = this.state.tanggal;  
            temp[index].kegiatan = this.state.kegiatan;  
        }  
        
        
        // array agenda diupdate dengan nilai data temp  
        this.setState({agenda: temp});  
        
        // menutup modal  
        $("#modal").modal('hide');  
    }  

    render() {
        return (
            <div className="container page-top">
                <table className="table table-striped table-dark">
                    <tbody>
                        <tr>
                            <th width="24" scope="col">NO</th>
                            <th width="92" scope="col">TANGGAL</th>
                            <th width="247" scope="col">KEGIATAN</th>
                            <th width="24" scope="col">AKSI</th>
                        </tr>
                        {this.state.agenda.map((item,index) => {  
                            return (  
                                <tr>
                                    <th scope="row">{item.no}</th>
                                    <td>{item.tanggal}</td>
                                    <td>{item.kegiatan} </td>
                                    <td>
                                        <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal">  
                                            Edit  
                                        </button>  
                                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
                                            Hapus  
                                        </button>  
                                    </td>
                                </tr>
                            );  
                        })}
                    </tbody>
                </table>
                
                <button className="btn btn-success" onClick={this.Add} data-toggle="modal" data-target="#modal">  
                    Tambah Data  
                </button>  
                <br></br><br></br>

                { /* elemen form modal */ }  
                <div className="modal fade" id="modal">  
                    <div className="modal-dialog">  
                        <div className="modal-content">  
                            <div className="modal-header bg-success text-white">  
                                <h5>Form Agenda</h5>  
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>  
                            <form onSubmit={this.SaveAgenda}>  
                                <div className="modal-body">  
                                    Tanggal  
                                    <input type="text" name="tanggal" className="form-control" onChange={this.bind}  
                                    value={this.state.tanggal} />  
                                    Kegiatan  
                                    <input type="text" name="kegiatan" className="form-control" onChange={this.bind}  
                                    value={this.state.kegiatan} />  
                                </div>  
                                <div className="modal-footer">  
                                    <button type="submit" className="btn btn-primary">  
                                    Simpan  
                                    </button>  
                                </div>  
                            </form>  
                        </div>  
                    </div>  
                </div>  
                <a className="btn btn-lg col-12 btn-primary" href="http://ditjenppi.menlhk.go.id/berita-ppi/102-beranda/agenda/2676-agenda-hari-hari-besar-kementerian-lingkungan-hudup-dan-kehutanan.html" target="blank" role="button">Info lebih lanjut &raquo;</a>
                <br></br><br></br>
            </div>
        )
    }
}

export default ListAgenda;