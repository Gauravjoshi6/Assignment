import FrameComponent2 from "./frame-component2";
import Component1 from "./component1";
import PropTypes from "prop-types";
import { useState } from "react";

const FrameComponent1 = ({
  className = "",
  propPadding,
  propHeight,
  propWidth,
  propTextDecoration,
  propBottom,
  propPadding1,
  propHeight1,
  propWidth1,
  propTextDecoration1,
  propBottom1,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isTogglede, setIsTogglede] = useState(false);
  const [isToggleds, setIsToggleds] = useState(false);
  const Handle = () => {
    
      setIsToggled(!isToggled);
      if (isTogglede== true || isToggleds== true) {
        setIsTogglede(false);
        setIsToggleds(false);
      }
      
    
    
    
  };
  const Handlee = () => {
   
    setIsTogglede(!isTogglede);
    if (isToggled== true || isToggleds== true) {
      setIsToggled(false);
      setIsToggleds(false);
    }

  };
  const Handles = () => {
    setIsToggleds(!isToggleds);
  
    if (isToggled== true || isTogglede== true) {
      setIsToggled(false);
      setIsTogglede(false);
    }
  };

  return (
    <div
      className={`absolute top-[7.438rem] left-[61.313rem] flex flex-row items-center justify-start gap-[0.375rem] text-center text-[1.125rem] text-gray-40 font-poppins ${className}`}
    >

      
      {/* Input Button */}
      
      <button
        onClick={Handle}
        className={` cursor-pointer w-[12.188rem] m-0 top-0 left-[25.5rem] text-custom-gray leading-[1.008rem] font-bold text-[1.2rem] rounded-2xl
          ${isToggled ? 'shadow-[-8.4px_-16.9px_50.6px_-16.87px_#485b71,_13.5px_16.9px_67.47px_8.43px_#0a0a0a] rounded-2xl bg-gray-100 text-hello' : 'bg-transparent transition-colors duration-300 ease-in-out'}  
          h-[3.063rem] z-10 hover:bg-gray-100`}
      > About Me</button>

      {/* Button Element */}
      <button
        onClick={Handlee}
        className={`cursor-pointer w-[12.188rem] m-0 top-0 left-[25.5rem] text-custom-gray leading-[1.008rem] font-bold text-[1.2rem] rounded-2xl
          ${isTogglede ? 'shadow-[-8.4px_-16.9px_50.6px_-16.87px_#485b71,_13.5px_16.9px_67.47px_8.43px_#0a0a0a] rounded-2xl bg-gray-100 text-hello' : 'bg-transparent'}  
          h-[3.063rem] z-10 hover:bg-gray-100`}
      > Experiences</button>

<button
        onClick={Handles}
        className={`cursor-pointer w-[12.188rem] m-0 top-0 left-[25.5rem] text-custom-gray leading-[1.008rem] font-bold text-[1.2rem] rounded-2xl
          ${isToggleds ? 'shadow-[-8.4px_-16.9px_50.6px_-16.87px_#485b71,_13.5px_16.9px_67.47px_8.43px_#0a0a0a] rounded-2xl bg-gray-100 text-hello' : 'bg-transparent'}  
          h-[3.063rem] z-10 hover:bg-gray-100`}
      > Recommended</button>

      {/* Static Content */}
      {/* <div className="w-[12.188rem] rounded-2xl h-[3.063rem] flex flex-row items-center justify-center py-[0.625rem] px-[1.5rem] box-border z-[1] text-white">
        <div className="relative leading-[1.008rem] font-medium">About Me</div>
      </div> */}

      {/* FrameComponent2 and Component1 */}
      <FrameComponent2
        propPadding={propPadding}
        propHeight={propHeight}
        propWidth={propWidth}
        propTextDecoration={propTextDecoration}
        propBottom={propBottom}
      />
      <Component1
        propPadding={propPadding1}
        propHeight={propHeight1}
        propWidth={propWidth1}
        propTextDecoration={propTextDecoration1}
        propBottom={propBottom1}
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  propPadding: PropTypes.string,
  propHeight: PropTypes.string,
  propWidth: PropTypes.string,
  propTextDecoration: PropTypes.string,
  propBottom: PropTypes.string,
  propPadding1: PropTypes.string,
  propHeight1: PropTypes.string,
  propWidth1: PropTypes.string,
  propTextDecoration1: PropTypes.string,
  propBottom1: PropTypes.string,
};

export default FrameComponent1;
