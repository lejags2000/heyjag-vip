import { useMemo } from "react";
import PropTypes from "prop-types";

const Prelude1 = ({ className = "", propLeft }) => {
  const preludeStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`h-[312px] w-[209px] absolute !m-[0] top-[0px] left-[5px] shrink-0 text-center text-3xs text-white font-body ${className}`}
      style={preludeStyle}
    >
      <div className="absolute top-[12px] left-[0px] bg-primary w-[195px] h-[300px] overflow-hidden" />
      <div className="absolute top-[0px] left-[14px] bg-white box-border w-[195px] overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-3 gap-[10px] z-[1] border-[1px] border-solid border-gray-200">
        <div className="self-stretch h-[150px] relative bg-grey overflow-hidden shrink-0">
          <div className="absolute top-[8px] left-[10px] rounded-sm bg-primary w-11 h-[18px] flex flex-row items-start justify-start pt-px px-9 pb-0 box-border">
            <a className="[text-decoration:none] absolute !m-[0] bottom-[-15.5px] left-[7.2px] tracking-[1px] leading-[48px] uppercase font-black text-[inherit] inline-block min-w-[29px]">
              FREE
            </a>
          </div>
          <img
            className="absolute w-[calc(100%_-_8px)] top-[calc(50%_-_53px)] right-[4px] left-[4px] max-w-full overflow-hidden h-[105px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/copy-of-logo-cafe-prelude-1@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] text-left text-black">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6.7px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
              <div className="flex-1 relative leading-[12px] font-extrabold">
                Free Regular Coffee when you buy a pastry
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
              <div className="flex-1 relative leading-[12px]">
                Adress: 312 N federal Hwy, Boynton Beach FL33435
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-neutral-light">
              <div className="flex-1 relative leading-[12px]">
                Exp: 07/31/2024
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-2.5">
          <button className="cursor-pointer [border:none] pt-px px-9 pb-0 bg-primary h-7 flex-1 rounded-sm flex flex-row items-start justify-start box-border relative hover:bg-lightseagreen">
            <div className="absolute !m-[0] bottom-[-10.5px] left-[59.7px] text-xs tracking-[1px] leading-[48px] uppercase font-black font-body text-white text-center inline-block min-w-[56px]">
              redeem
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

Prelude1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Prelude1;
