import PropTypes from "prop-types";
import { useState } from "react";

const GroupComponent = ({ className = "" }) => {

  
  return (
    <div
      className={`absolute top-[6rem] left-[57.625rem] w-[45rem] h-[19.75rem] 2xl:w-[45rem] 2xl:h-[19.75rem] md:w-[20rem] md:h-[15.75rem]  ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] shadow-[5.7px_5.7px_3.78px_rgba(0,_0,_0,_0.4)] rounded-[18.89px] bg-darkslategray-200 2xl:w-[45rem] 2xl:h-[19.75rem] md:w-[35rem] md:h-[15.75rem] " />
      <div className="absolute top-[1.25rem] left-[0.75rem] w-[1.5rem] flex flex-col items-center justify-start gap-[6.562rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem]"
          alt=""
          src="/vector.svg"
        />
        <div className="self-stretch rounded-[2.33px] flex flex-row items-start justify-start flex-wrap content-start gap-[0.087rem]">
          <div className="w-[0.581rem] relative rounded-[1.16px] bg-darkslategray-100 h-[0.581rem]" />
          <div className="w-[0.581rem] relative rounded-[1.16px] bg-darkslategray-100 h-[0.581rem]" />
          <div className="w-[0.581rem] relative rounded-[1.16px] bg-darkslategray-100 h-[0.581rem]" />
          <div className="w-[0.581rem] relative rounded-[1.16px] bg-darkslategray-100 h-[0.581rem]" />
          <div className="w-[0.581rem] relative rounded-[1.16px] bg-darkslategray-100 h-[0.581rem]" />
          <div className="w-[0.581rem] relative rounded-[1.16px] bg-darkslategray-100 h-[0.581rem]" />
        </div>
      </div>
      <div  className="absolute top-[6.938rem] left-[43.688rem] md:top-[6.938rem] md:left-[33.688rem] 2xl:top-[6.938rem] 2xl:left-[43.688rem] shadow-[4px_4px_4.9px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(177.32deg,_#888989,_#4a4e54)] w-[0.5rem] h-[4rem]" />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
