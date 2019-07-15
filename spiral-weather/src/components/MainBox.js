import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainBox extends Component {


  renderList() {
    if (this.props.posts.data){
      console.log('Current:',this.props.posts.data.currently.summary);
      var response = this.props.posts;
      var data = response.data;
      var currentData = data.currently;
      var d = new Date(currentData.time);
      //console.log('d=',d.toUTCString());
      return (
        <div>
          Location:{data.timezone}<br/>
          summary:{currentData.summary}<br/>
          Temprature:{currentData.temperature}<br/>
          Time: {d.toUTCString()}

        </div>
      )
    }
  }

  render() {
    console.log('this.props.posts.data:',this.props.posts.data);

    return (
      <div className = 'MainBox-wrap'>
        MainBox
        <div>
          {this.renderList()}
        </div>
      </div>)
    }
};

const mapStateToProps = state => {
  return {posts:state.posts};
};

export default connect(mapStateToProps)(MainBox);
