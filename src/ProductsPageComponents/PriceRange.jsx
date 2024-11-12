import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function PriceRange() {
  const [value, setValue] = useState([999, 6999]);

  const min = 999;
  const max = 6999;
  const step = 100;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <RangeSlider id="range-slider-blue"
          min={min}
          max={max}
          step={step}
          value={value}
          onInput={setValue}
          className="w-[90%] mt-14 mb-6"
        />
        <output className="heading mt-4 text-[25px]">
          Price: &#x20B9;{value[0]} - {value[1]}
        </output>
      </div>
    </> 
  );
}
