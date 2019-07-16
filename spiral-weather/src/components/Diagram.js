import React from 'react';
import DayBox from './DayBox'

const Diagram = () => {
  return <div className = 'Diagram-wrap'>
           Diagram
           <DayBox count={1}/>
           <DayBox count={2}/>
           <DayBox count={3}/>
         </div>;
};

export default Diagram;
