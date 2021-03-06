import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';
import NotFound from 'components/NotFound';

export default function Photo(props) {
    const match = useRouteMatch();
    console.log({ match });
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}></Route>
            <Route exact path={`${match.url}/add`} component={AddEditPage}></Route>
            <Route exact path={`${match.url}/:photoId`} component={AddEditPage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    );
}

