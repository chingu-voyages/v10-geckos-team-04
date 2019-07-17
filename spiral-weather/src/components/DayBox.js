import React, {Component} from 'react';
import {connect} from 'react-redux';

class DayBox extends Component {

  renderList(){
    if (this.props.posts.data){
      let data = this.props.posts.data;
      let hourlyData = data.hourly.data;
      console.log('Inside Daybox, data:',data)
      console.log('Inside Daybox, hourlyData:',hourlyData)
      let dayFrame = this.props.count*24
      console.log('count:',this.props.count,' dayFrame:',dayFrame);
      let d1 = new Date(hourlyData[dayFrame-24].time*1000);
      let d2 = new Date(hourlyData[dayFrame-23].time*1000);
      return(
        <div> Here suppose data of box #{this.props.count} dayFrame:{dayFrame}
          <br/>
          {dayFrame-24}:time:{d1.toString()}<br/>
          {dayFrame-23}:time:{d2.toString()}<br/>
        </div>
      )
    };

  };
  render(){
    return(
      <div className = 'DayBox-wrap'>
        DayBox
        {this.renderList()}
      </div>)
  }
};

const mapStateToProps = state =>{
  return {posts:state.posts}
}

export default connect(mapStateToProps)(DayBox);
