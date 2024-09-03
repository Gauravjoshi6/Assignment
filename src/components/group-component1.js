import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[28.313rem] left-[57.625rem] w-[45rem] h-[20.625rem] pb-60 ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] shadow-[5.7px_5.7px_3.78px_rgba(0,_0,_0,_0.4)] rounded-[18.89px] bg-darkslategray-200 w-[45rem] h-[20.625rem]" />
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
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
