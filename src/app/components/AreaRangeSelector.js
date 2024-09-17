"use client"; // Add this line to make it a Client Component

import { useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
const AreaRangeSelector = ({title,unite,mValue,mxValue}) => {

  const [minValue, set_minValue] = useState(mValue);
  const [maxValue, set_maxValue] = useState(mxValue);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
 
  return (
    <div style={{ marginLeft: 20 }}>
      <h5 className="text-gray-500">{title}</h5>

      {/* Increased width for the box */}
      <div className="border border-gray-700 flex justify-between items-center text-center h-10 w-60 px-4 mt-2">
        {/* Left side (Min Value) */}
        <span>{minValue} {unite}</span>

        {/* Right side (Max Value) */}
        <span>{maxValue} {unite}</span>
      </div>

      {/* Range sliders positioned at the bottom */}
      <div className="App">
		<MultiRangeSlider
			min={mValue}
			max={mxValue}
			step={3}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
      ruler={false}
      minCaption={''}
      maxCaption={''}
      style={{borderWidth:0,
      marginTop:-22,
      
      }}
      label={false}
      
		/>
	</div>
    </div>
  );
};

export default AreaRangeSelector;