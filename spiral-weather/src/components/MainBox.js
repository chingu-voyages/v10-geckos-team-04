import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainBox extends Component {


  renderList() {
    if (this.props.posts.data){
      var response = this.props.posts;
      var data = response.data;
      var currentData = data.currently;
      var d = new Date(currentData.time*1000);
      console.log('time:',currentData.time);
      console.log('data:',data);
      console.log('currentData:',currentData);
      return (
        <div>
          Location:{data.timezone}<br/>
          summary:{currentData.summary}<br/>
          Temprature:{currentData.temperature}<br/>
          Time: {d.toString()}

        </div>
      )
    }
  }

  render() {
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
