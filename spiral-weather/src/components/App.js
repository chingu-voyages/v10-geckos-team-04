import React, { Component } from 'react';
import { fetchWeather } from '../actions';
import { connect } from 'react-redux';
import MainBox from './MainBox';
import CitiesBox from'./CitiesBox';
import '../App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchWeather();
  }
  render() {
    return (
      <div className = 'App-wrap'>App
             <MainBox/>
             <CitiesBox/>
      </div>)

  }

};

export default connect(null,{fetchWeather})(App);
