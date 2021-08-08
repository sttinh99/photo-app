
import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';

const Photo = React.lazy(() => import('./features/Photo')) // dung de load tung feature 
//Co React.lazy thi phai co thang Suspense => de load trong qua trinh loadpage
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos"></Redirect>
            <Route path="/photos" component={Photo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
