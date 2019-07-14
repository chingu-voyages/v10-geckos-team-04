import React, { Component } from 'react';
import MainBox from './MainBox';
import CitiesBox from'./CitiesBox';
import '../App.css';

class App extends Component {
  componentDidMount(){
    
  }
  return <div className = 'App-wrap'>App
           <MainBox/>
           <CitiesBox/>
         </div>;
};

export default App;
