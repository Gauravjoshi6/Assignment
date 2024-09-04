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
     
    >
     
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
