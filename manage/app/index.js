import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Router, Route } from 'react-router';
import Header from './js/components/header/Header';
import Footer from 'js/components/footer/Footer';
import Main from 'js/components/main/Main';
import DashBoard from 'js/components/main/dashboard/dashboard';
import GirlsList from 'js/components/main/girlslist/girlslist';
import Girldetail from 'js/components/main/girlInfo/girlInfo';
import ChangeInfo from 'js/components/main/girlInfo/changeGirlInfo';
import AddUrl from 'js/components/main/girlInfo/addUrl/addUrl';

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const main = document.getElementById('main');

function renderHeader() {
  ReactDOM.render(<Header />,header)
};

function renderMain() {
  ReactDOM.render(
    <Router history={hashHistory}>
       <Route path="/" component={Main}>
          <IndexRoute component={DashBoard}/>
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/girlslist" component={GirlsList} />
          <Route path="/changeinfo(/:name)" component={ChangeInfo} />
          <Route path="/addurl(/:name)(/:type)" component={AddUrl} />
          <Route path="/girldetail(/:name)" component={Girldetail} />
       </Route>
    </Router>
    ,main)
};

function renderFooter() {
  ReactDOM.render(<Footer />,footer)
};
renderHeader();
renderMain();
renderFooter();
