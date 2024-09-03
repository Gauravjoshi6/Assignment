import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      // className={`top-[27.25rem] left-[59.563rem] w-[40.75rem] h-[29.688rem]  text-left text-[1.25rem] text-white font-poppins ${className}`}
    >
      {/* <div className="absolute top-[2.313rem] left-[1.25rem] shadow-[0px_4px_10px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-xl bg-gray-200 w-[9.313rem] h-[3.875rem]" />
      <div className="absolute top-[3.313rem] left-[3.688rem] font-medium ">
        Gallery
      </div>
      
      <img
        className="absolute top-[48px] left-[581px] w-[60px] h-[60px]"
        alt=""
        src="/component-312.svg"
      />
      <img
        className="absolute top-[48px] left-[32.375rem] w-[60px] h-[60px]"
        alt=""
        src="/component-313.svg"
      />
       */}
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
