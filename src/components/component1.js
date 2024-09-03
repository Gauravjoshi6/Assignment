import { useMemo } from "react";
import PropTypes from "prop-types";

const Component1 = ({
  className = "",
  propPadding,
  propHeight,
  propWidth,
  propTextDecoration,
  propBottom,
}) => {
  const component112Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
      width: propWidth,
    };
  }, [propPadding, propHeight, propWidth]);

  const recommendedStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div
      // className={`w-[12.188rem] rounded-2xl h-[3.063rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.625rem] px-[1.5rem] box-border relative gap-[0.625rem] z-[3] text-center text-[1.125rem] text-gray-40 font-poppins ${className}`}
      // style={component112Style}
    >
      {/* <div
        className="relative leading-[1.008rem] font-medium z-[0]"
        style={recommendedStyle}
      >
        Recommended
      </div>
      <div
        className="w-[12.188rem] absolute !m-[0] top-[0rem] left-[-12.5rem] rounded-2xl [background:linear-gradient(90deg,_rgba(39,_39,_40,_0.12),_rgba(150,_190,_231,_0.06))] h-[3.063rem] z-[1]"
        style={rectangleDiv1Style}
      /> */}
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propBottom: PropTypes.any,
};

export default Component1;
