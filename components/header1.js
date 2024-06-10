import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Header1 = ({ className = "" }) => {
  const router = useRouter();

  const onNavClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header
      className={`self-stretch shadow-[0px_4px_8.6px_rgba(0,_0,_0,_0.18)] bg-white flex flex-row items-end justify-between pt-4 pb-[16.5px] pr-10 pl-[45px] sticky top-[0] z-[99] gap-[20px] text-center text-xl text-neutral font-body lg:pl-[22px] lg:box-border ${className}`}
    >
      <div className="w-[135px] flex flex-col items-start justify-end pt-0 px-0 pb-[11.5px] box-border">
        <a className="[text-decoration:none] self-stretch relative leading-[24px] font-extrabold text-[inherit] whitespace-nowrap">
          CasaCosta VIP
        </a>
      </div>
      <div className="w-[222px] flex flex-row items-start justify-start gap-[22px]">
        <button className="cursor-pointer pt-px pb-0 pr-4 pl-[18px] bg-[transparent] flex-[0.62] rounded-sm flex flex-row items-start justify-start border-[2px] border-solid border-secondary hover:bg-seagreen-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-seagreen-100">
          <a className="[text-decoration:none] w-[62px] relative text-xs tracking-[1px] leading-[48px] uppercase font-black font-body text-secondary text-center flex items-center justify-center min-w-[62px] whitespace-nowrap">
            log out
          </a>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start"
          onClick={onNavClick}
        >
          <button className="cursor-pointer [border:none] pt-px px-[27px] pb-0 bg-primary flex-1 rounded-sm flex flex-row items-start justify-start hover:bg-lightseagreen">
            <a className="[text-decoration:none] w-11 relative text-xs tracking-[1px] leading-[48px] uppercase font-black font-body text-white text-center flex items-center justify-center min-w-[44px]">
              Login
            </a>
          </button>
        </button>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
