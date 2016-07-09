import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'js/components/header/Header';
import Footer from 'js/components/footer/Footer';
import Rank from 'js/components/rank/Rank';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

const rank = document.getElementById('rank');
const data = [
  {
    src: 'img/1.jpg',
    name: 'name1'
  },
  {
    src: 'img/1.jpg',
    name: 'name1'
  },
  {
    src: 'img/1.jpg',
    name: 'name1'
  },
  {
    src: 'img/1.jpg',
    name: 'name1'
  }
];
function renderHeader() {
  ReactDOM.render(<Header />,header)
};

function renderRank() {
  ReactDOM.render(<Rank data={data}/>,rank)
};

function renderFooter() {
  ReactDOM.render(<Footer />,footer)
};
renderHeader();
renderRank();
renderFooter();
