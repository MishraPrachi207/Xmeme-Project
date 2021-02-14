import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Memes from './landing/Memes';
import HeaderBar from './landing/Header/HeaderBar'
import MemeForm from './landing/MemeInfo/MemeForm';
import ScrollablePosts from './landing/MemePosts/ScrollablePosts';

ReactDOM.render(
  <React.StrictMode>
       <div>
        <HeaderBar/>
        <div class="container">
        <div >
            <MemeForm/>
        </div>
        <div class ="right">
          <ScrollablePosts />
        </div>
        </div>
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);



