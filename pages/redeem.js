import Header1 from "../components/header1";
import Prelude1 from "../components/prelude1";
import Prelude from "../components/prelude";
import NYPD from "../components/n-y-p-d";

const Redeem = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-5 box-border gap-[50px] tracking-[normal] leading-[normal] mq450:gap-[25px]">
      <Header1 />
      <main className="self-stretch flex flex-row items-start justify-end py-0 pr-11 pl-[45px] box-border max-w-full lg:pl-[22px] lg:pr-[22px] lg:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full text-center text-17xl text-neutral font-body">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[43px] max-w-full mq825:gap-[21px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
              <h1 className="m-0 w-[490px] relative text-inherit leading-[42px] capitalize font-black font-inherit flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px]">
                Discount coupons and code
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1425:flex-wrap mq1425:justify-center">
              <form className="m-0 w-[1236px] flex flex-row items-start justify-center gap-[65px] max-w-full lg:flex-wrap mq450:gap-[16px] mq825:gap-[32px]">
                <div className="h-[50px] flex-[0.9404] rounded bg-grey box-border flex flex-row items-start justify-start py-2 pr-[13px] pl-[15px] gap-[200px] min-w-[327px] max-w-full border-[1px] border-solid border-gray-100 mq450:flex-1">
                  <div className="h-7 w-[241px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <div className="w-[241px] h-[23px] flex flex-row items-start justify-start gap-[22px]">
                      <img
                        className="h-[23px] w-[23px] relative"
                        alt=""
                        src="/search.svg"
                      />
                      <div className="h-5 w-[196px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                        <input
                          className="[border:none] [outline:none] font-medium font-body text-mini bg-[transparent] w-[196px] h-[17px] relative leading-[17px] text-neutral text-left inline-block"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[34px] w-[34px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-sm bg-primary w-full h-full flex flex-row items-center justify-center pt-px px-0 pb-0 box-border">
                      <div className="w-14 relative text-xs tracking-[1px] leading-[48px] uppercase font-black font-body text-white text-center hidden">
                        redeem
                      </div>
                    </div>
                    <img
                      className="absolute top-[5px] left-[5px] w-6 h-6 z-[1]"
                      alt=""
                      src="/arrow-forward.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-center gap-[18px] min-w-[327px] max-w-full mq450:flex-wrap">
                  <div className="rounded bg-white flex flex-row items-start justify-start py-[15px] px-3.5 gap-[10px] border-[1px] border-solid border-gray-200">
                    <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[75px]">
                      Categories
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border h-3 w-3">
                      <img
                        className="w-3 h-[7px] relative object-contain"
                        alt=""
                        src="/arrow-back-ios.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[94px] rounded bg-white box-border flex flex-row items-start justify-start py-[15px] px-3.5 gap-[10px] border-[1px] border-solid border-gray-200">
                    <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[42px]">
                      Shops
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border h-3 w-3">
                      <img
                        className="w-3 h-[7px] relative object-contain"
                        alt=""
                        src="/arrow-back-ios.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-white box-border flex flex-row items-start justify-start py-[15px] px-3.5 gap-[10px] min-w-[92px] border-[1px] border-solid border-gray-200">
                    <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[89px]">
                      Coupon type
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border h-3 w-3">
                      <img
                        className="w-3 h-[7px] relative object-contain"
                        alt=""
                        src="/arrow-back-ios.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[87px] rounded bg-white box-border flex flex-row items-start justify-start py-[15px] px-3.5 gap-[10px] border-[1px] border-solid border-gray-200">
                    <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[35px]">
                      Sales
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border h-3 w-3">
                      <img
                        className="w-3 h-[7px] relative object-contain"
                        alt=""
                        src="/arrow-back-ios.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer p-3.5 bg-white w-[100px] rounded box-border flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[42px]">
                    Latest
                  </div>
                  <img
                    className="h-[18px] w-[18px] relative object-contain min-h-[18px]"
                    alt=""
                    src="/compare-arrows@2x.png"
                  />
                </button>
              </form>
              <button className="cursor-pointer [border:none] py-[13px] px-[15px] bg-honeydew rounded flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/filter-list.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                  <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[42px]">
                    Filters
                  </div>
                </div>
              </button>
            </div>
            <div className="w-[1639px] h-[730px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start justify-center relative gap-[31px_75px] max-w-full">
              <Prelude1 />
              <Prelude1 propLeft="289px" />
              <Prelude1 propLeft="573px" />
              <Prelude />
              <Prelude propLeft="1141px" />
              <Prelude propLeft="1425px" />
              <NYPD />
              <NYPD propLeft="289px" />
              <NYPD propLeft="573px" />
              <NYPD propLeft="857px" />
              <NYPD propLeft="1141px" />
              <NYPD propLeft="1425px" />
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-1 pl-[5px] box-border max-w-full">
            <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gray-200" />
          </div>
          <footer className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 text-left text-mini text-neutral font-body">
            <h3 className="m-0 relative text-inherit leading-[17px] font-medium font-inherit inline-block min-w-[69px]">
              Copyright
            </h3>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Redeem;
