import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  propPadding,
  propHeight,
  propWidth,
  propTextDecoration,
  propBottom,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
      width: propWidth,
    };
  }, [propPadding, propHeight, propWidth]);

  const experiencesStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const rectangleDivStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div
     
    >
     
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propBottom: PropTypes.any,
};

export default FrameComponent2;
