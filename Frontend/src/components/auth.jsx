import PropTypes from "prop-types";

const Auth = ({ className = "" }) => {
  return (
    <div
      className={`w-[1450px] bg-white max-w-full flex flex-col items-start justify-start pt-0 px-[5px] pb-16 box-border gap-[64px] leading-[normal] tracking-[normal] mq450:gap-[16px] mq750:gap-[32px] ${className}`}
    >
      <section className="self-stretch h-[136px] overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full text-left text-29xl text-black1 font-righteous">
        <div className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start py-7 px-[55px] box-border max-w-full mq450:gap-[451px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="w-[294px] overflow-hidden flex flex-row items-center justify-between gap-[-23px]">
            <img
              className="h-[108px] w-[114px] relative object-cover shrink-0"
              loading="lazy"
              alt=""
              src="/nobg3-11@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit shrink-0 z-[1] mq450:text-10xl mq450:leading-[43px] mq750:text-19xl mq750:leading-[58px]">
              SkillSage
            </h1>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base text-black1 font-small-text">
        <div className="w-[400px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-5xl">
            <div className="w-[209px] flex flex-col items-start justify-start gap-[4px]">
              <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
                Create an account
              </h3>
              <div className="self-stretch relative text-base leading-[150%]">
                Enter your email to sign up for this app
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <input
              className="self-stretch rounded-lg bg-white box-border flex flex-row items-start justify-start py-[3px] px-[15px] max-w-full border-[1px] border-solid border-gainsboro-200"
              required={true}
              type="text"
              placeholder="Enter Email ID"
            />
            <button className="cursor-pointer [border:none] py-0 px-5 bg-black text-white self-stretch rounded-lg flex flex-row items-start justify-center hover:bg-gray-500">
              <div className="relative text-base leading-[150%] font-medium font-small-text text-white text-left">
                Sign up with email
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] text-gray">
            <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[84px]">
              <div className="self-stretch h-px relative bg-gainsboro-100" />
            </div>
            <div className="relative leading-[150%] inline-block min-w-[123px]">
              or continue with
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[84px]">
              <div className="self-stretch h-px relative bg-gainsboro-100" />
            </div>
          </div>
          <button className="cursor-pointer border-none py-2 px-5 bg-black text-white self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-gray-500">
            <div className="flex flex-row items-center gap-3">
              <img
                className="w-5 h-5"
                alt="Google logo"
                src="/google-pay.svg"
              />
              <div className="font-medium">
                Google
              </div>
            </div>
          </button>
          <div className="self-stretch relative leading-[150%] text-gray">
            <span>{`By clicking continue, you agree to our `}</span>
            <span className="text-black1">Terms of Service</span>
            <span>{` and `}</span>
            <span className="text-black1">Privacy Policy</span>
          </div>
        </div>
      </section>
    </div>
  );
};

Auth.propTypes = {
  className: PropTypes.string,
};

export default Auth;
