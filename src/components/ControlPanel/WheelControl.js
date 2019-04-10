import React from 'react';

const WheelControl = ({ 
  selectedWheel,
  onSmallWheelClick,
  onLargeWheelClick,
}) => (
  <div className="wheel-control">
    <p>Wheel</p>
    <div className="wheel-option-container">
      <div 
        className={`wheel-19-box wheel-box ${selectedWheel===19 ? 'active' : null}`}
        onClick={()=> onSmallWheelClick()}
      >
        <div className="wheel-19"></div>
        <p>19"</p>
      </div>
      <div 
        className={`wheel-21-box wheel-box ${selectedWheel===21 ? 'active' : null}`}
        onClick={()=> onLargeWheelClick()}
      >
        <div className="wheel-21"></div>
        <p>21"</p>
      </div>
    </div>
  </div>
)

export default WheelControl;