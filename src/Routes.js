import React from 'react';
import {Switch , Route, Link} from 'react-router-dom'
import UserTable from './components/tablaUsuarios';
import AddCotainer from './containers/FormAddContainer';
import EditUserForm from './components/EditUserForm';

const Routes = () => {
    return(
        <div>
    <Switch>
        <Route exact path="/" component={UserTable} />
        <Route path="/agregar" component={AddCotainer} />
        <Route path="/editar/:id" component={EditUserForm} />
    </Switch>
    </div>
    )
}
export default Routes