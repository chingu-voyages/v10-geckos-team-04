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
      let tapeArray = [];
      let i;
      for(i=dayFrame-23;i<dayFrame+1;i++){
        tapeArray.push(hourlyData[i])
      }
      return(
        <div>   DayBox: {new Date(hourlyData[dayFrame-24].time*1000).toString()}
          <br/>
          {dayFrame-24}:time:{new Date(hourlyData[dayFrame-24].time*1000).toString().replace(/.*(\d{2}:\d{2})(:\d{2}).*/, "$1")}<br/>
          {dayFrame-23}:time:{new Date(hourlyData[dayFrame-23].time*1000).toTimeString().replace(/.*(\d{2}:\d{2})(:\d{2}).*/, "$1")}<br/>
          {tapeArray.map((item,index)=>(<span key={index} className='DayBox-hourly'>{new Date(item.time*1000).toTimeString().replace(/.*(\d{2}:\d{2})(:\d{2}).*/, "$1")} t:{item.temperature} <br/>wind:{item.windSpeed} <br/>{item.summary}<br/></span>))}
        </div>
      )
    };

  };
  render(){
    return(
      <div className = 'DayBox-wrap'>
        {this.renderList()}
      </div>)
  }
};

const mapStateToProps = state =>{
  return {posts:state.posts}
}

export default connect(mapStateToProps)(DayBox);
