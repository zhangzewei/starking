import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'js/components/header/Header';
import Footer from 'js/components/footer/Footer';
import Detail from 'js/components/girlDetail/girlDetail';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

const detail = document.getElementById('detail');

const data ={
  maininfo:{
    src: 'img/1.jpg',
    name: 'haha',
    height: '170',
    weight: '65',
    hobby: '唱歌，跳舞，等等',
    spe: 'Rap',
    department: 'Rap'
  },
  pics:[
    { src: 'img/1.jpg' },
    { src: 'img/2.jpg' },
    { src: 'img/3.jpg' },
    { src: 'img/4.jpg' },
    { src: 'img/3.jpg' },
    { src: 'img/2.jpg' }
  ],
  videos: [
    {
      'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
      'src': 'img/111.png',
      'name': 'hahahh'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
      'src': 'img/222.png',
      'name': 'vcvvaasd'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
      'src': 'img/333.png',
      'name': 'asdasdasda'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
      'src': 'img/111.png',
      'name': 'hahahh'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
      'src': 'img/222.png',
      'name': 'vcvvaasd'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
      'src': 'img/333.png',
      'name': 'asdasdasda'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
      'src': 'img/111.png',
      'name': 'hahahh'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
      'src': 'img/222.png',
      'name': 'vcvvaasd'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
      'src': 'img/333.png',
      'name': 'asdasdasda'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
      'src': 'img/111.png',
      'name': 'hahahh'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
      'src': 'img/222.png',
      'name': 'vcvvaasd'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
      'src': 'img/333.png',
      'name': 'asdasdasda'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
      'src': 'img/111.png',
      'name': 'hahahh'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
      'src': 'img/222.png',
      'name': 'vcvvaasd'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
      'src': 'img/333.png',
      'name': 'asdasdasda'
    },
    {
      'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
      'src': 'img/333.png',
      'name': 'asdasdasda'
    }
  ]
};
function renderHeader() {
  ReactDOM.render(<Header />,header)
};

function renderDetail() {
  ReactDOM.render(<Detail data={data}/>,detail)
};

function renderFooter() {
  ReactDOM.render(<Footer />,footer)
};
renderHeader();
renderDetail();
renderFooter();
