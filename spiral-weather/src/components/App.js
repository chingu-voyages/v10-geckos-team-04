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
    console.log('Response inside <App/>:',this.props.posts);
    return (
      <div className = 'App-wrap'>App
             <MainBox/>
             <CitiesBox/>
      </div>)
  }



};

const mapStateToProps = state => {
  return {posts: state.posts};
};

export default connect(mapStateToProps,{fetchWeather})(App);
