import { useCallback } from "react";
import Header from "../components/header";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onRegisterContainerClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-5 box-border gap-[268px] tracking-[normal] leading-[normal] mq450:gap-[67px] mq900:gap-[134px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[80px] max-w-full text-center text-17xl text-neutral font-body mq450:gap-[20px] mq900:gap-[40px]">
        <Header />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h1 className="m-0 relative text-inherit leading-[42px] capitalize font-black font-inherit mq450:text-3xl mq450:leading-[25px] mq900:text-10xl mq900:leading-[34px]">
            Login CasaCosta VIP
          </h1>
        </div>
        <section className="w-[1686px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[500px] flex flex-row items-start justify-start relative max-w-full">
            <div className="h-full w-full absolute !m-[0] bottom-[-40px] left-[-41px] bg-primary overflow-hidden shrink-0" />
            <form className="m-0 flex-1 bg-white box-border flex flex-col items-start justify-start pt-11 px-[49px] pb-[38px] gap-[23px] max-w-full z-[1] border-[1px] border-solid border-gray-200 mq675:pt-[29px] mq675:px-6 mq675:pb-[25px] mq675:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22.5px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[37.5px] min-w-[130px] mq450:flex-1">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[74px]">
                            <div className="relative text-xl leading-[24px] font-extrabold font-body text-primary text-left inline-block min-w-[52px] mq450:text-base mq450:leading-[19px]">
                              Login
                            </div>
                          </div>
                          <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-primary" />
                        </div>
                        <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[37px]">
                          Email
                        </div>
                      </div>
                      <div
                        className="h-[34px] flex-[0.38] flex flex-row items-start justify-start pt-0 px-[62px] pb-2.5 box-border relative min-w-[130px] cursor-pointer mq450:flex-1"
                        onClick={onRegisterContainerClick}
                      >
                        <div className="absolute !m-[0] top-[0px] left-[calc(50%_-_38px)] text-xl leading-[24px] font-medium font-body text-neutral text-left inline-block min-w-[76px] mq450:text-base mq450:leading-[19px]">
                          Register
                        </div>
                        <div className="h-0.5 w-[202px] relative box-border hidden z-[1] border-t-[2px] border-solid border-primary" />
                      </div>
                    </div>
                    <input
                      className="[outline:none] bg-grey self-stretch h-[50px] relative rounded box-border min-w-[240px] border-[1px] border-solid border-gray-100"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[65px] shrink-0 [debug_commit:69da668]">
                      Password
                    </div>
                    <div className="relative text-mini leading-[17px] font-medium font-body text-primary text-right shrink-0 [debug_commit:69da668]">
                      Forgot your password?
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-grey self-stretch h-[50px] relative rounded box-border min-w-[240px] border-[1px] border-solid border-white"
                    type="text"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <input
                    className="m-0 h-[25px] w-[25px] relative rounded-12xs overflow-hidden shrink-0"
                    type="checkbox"
                  />
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="relative text-mini leading-[17px] font-medium font-body text-neutral text-left inline-block min-w-[111px]">
                      Keep me signed
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.5px] box-border max-w-full">
                <p className="m-0 flex-1 relative text-mini leading-[17px] font-medium font-body text-left inline-block max-w-full">
                  <span className="text-neutral">{`By clicking below, I agree to `}</span>
                  <span className="text-primary">Terms of Use</span>
                  <span className="text-neutral">{` and have reed the `}</span>
                  <span className="text-primary">Privacy Statement</span>
                </p>
              </div>
              <button className="cursor-pointer [border:none] pt-px px-5 pb-0 bg-primary self-stretch rounded-sm flex flex-row items-start justify-center hover:bg-lightseagreen">
                <div className="relative text-xs tracking-[1px] leading-[48px] uppercase font-black font-body text-white text-center inline-block min-w-[45px]">
                  Login
                </div>
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-[49px] pl-[50px] box-border max-w-full text-left text-mini text-neutral font-body mq900:pl-[25px] mq900:pr-6 mq900:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
            <div className="relative leading-[17px] font-medium inline-block min-w-[69px]">
              Copyright
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
