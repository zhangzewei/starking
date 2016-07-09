import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'js/components/header/Header';
import Footer from 'js/components/footer/Footer';
import ShowGirls from 'js/components/showGirls/ShowGirls';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

const showGirls = document.getElementById('show-girls');

const data = [
  {
    src: 'img/1.jpg',
    name: 'name1',
    vote: '33'
  },
  {
    src: 'img/2.jpg',
    name: 'name2',
    vote: '12'
  },
  {
    src: 'img/3.jpg',
    name: 'name3',
    vote: '55'
  },
  {
    src: 'img/4.jpg',
    name: 'name4',
    vote: '66'
  },
];

function renderHeader() {
  ReactDOM.render(<Header />,header)
};

function renderShowGirls() {
  ReactDOM.render(<ShowGirls data={data}/>,showGirls)
};

function renderFooter() {
  ReactDOM.render(<Footer />,footer)
};
renderHeader();
renderShowGirls();
renderFooter();
