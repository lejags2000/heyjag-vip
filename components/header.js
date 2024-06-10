import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_4px_8.6px_rgba(0,_0,_0,_0.18)] bg-white flex flex-row items-end justify-between py-[16.5px] pr-10 pl-[45px] sticky top-[0] z-[99] gap-[20px] text-center text-xl text-neutral font-body mq900:pl-[22px] mq900:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11.5px]">
        <a className="[text-decoration:none] relative leading-[24px] font-extrabold text-[inherit] whitespace-nowrap">
          CasaCosta VIP
        </a>
      </div>
      <button className="cursor-pointer [border:none] pt-px px-[26px] pb-0 bg-primary w-[100px] rounded-sm flex flex-row items-start justify-start box-border hover:bg-lightseagreen">
        <a className="[text-decoration:none] relative text-xs tracking-[1px] leading-[48px] uppercase font-black font-body text-white text-center inline-block min-w-[45px]">
          Login
        </a>
      </button>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
