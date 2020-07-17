import React, { Component } from 'react';
import UserTable from './components/tablaUsuarios';
import Cabezera from './components/Cabezera'
import Routes from './Routes';
import Side from './components/Side'


class App extends Component {
render(){
    return ( 
    <div>
    <Cabezera />
    <Side />
     <Routes />
    </div>
    );
}
};

export default App;