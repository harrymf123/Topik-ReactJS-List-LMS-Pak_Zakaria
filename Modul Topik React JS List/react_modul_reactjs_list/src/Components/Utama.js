import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import TentangSaya from './TentangSaya';
import Karya from './Karya';
import Kontak from './Kontak';
import List from './List';
import Gallery from './pages/Gallery';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/list" component={List} />
        <Route path="/gallery" component={Gallery} />
    </Switch>
)

export default Utama;