import React from 'react';
import MainBox from './MainBox';
import CitiesBox from'./CitiesBox';
import '../App.css';

const App = () => {
  return <div className = 'App-wrap'>App
           <MainBox/>
           <CitiesBox/>
         </div>;
};

export default App;
