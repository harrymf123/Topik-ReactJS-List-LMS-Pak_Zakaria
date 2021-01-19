import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import Galeri from './Galeri';
import ListAgenda from './ListAgenda';
import ListKeranjang from './ListKeranjang';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/listagenda" component={ListAgenda} />
        <Route path="/listkeranjang" component={ListKeranjang} />
    </Switch>
)

export default Utama;