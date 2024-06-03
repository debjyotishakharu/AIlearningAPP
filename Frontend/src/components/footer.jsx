import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full text-left text-13xl text-black font-righteous mq825:pl-10 mq825:pr-10 mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[96px] max-w-full mq450:gap-[24px] mq825:gap-[48px]">
        <div className="self-stretch h-[79px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[78px] box-border gap-[39px] mq825:gap-[19px]">
          <div className="self-stretch h-px relative box-border shrink-0 [debug_commit:bf4bc93] border-t-[1px] border-solid border-gainsboro-100" />
          <h1 className="m-0 w-[219px] relative text-inherit leading-[150%] font-normal font-inherit flex items-center shrink-0 [debug_commit:bf4bc93] mq450:text-lgi mq450:leading-[29px] mq825:text-7xl mq825:leading-[38px]">
            SkillSage
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-full text-mini font-heading">
          <div className="w-[859px] overflow-hidden shrink-0 flex flex-row items-center justify-between gap-[20px] max-w-full">
            <div className="overflow-hidden flex flex-col items-center justify-start">
              <div className="flex flex-row items-start justify-start py-0 pr-[45px] pl-0 gap-[8px]">
                <img
                  className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                  loading="lazy"
                  alt=""
                  src="/buttons--icon@2x.png"
                />
                <img
                  className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                  alt=""
                  src="/buttons--icon-1@2x.png"
                />
                <img
                  className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                  alt=""
                  src="/buttons--icon-2@2x.png"
                />
                <img
                  className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                  alt=""
                  src="/buttons--icon-3@2x.png"
                />
              </div>
            </div>
            <div className="h-[42px] w-[53px] relative leading-[150%] flex items-center shrink-0">
              About
            </div>
          </div>
          <div className="w-[398px] overflow-hidden shrink-0 flex flex-row items-center justify-between max-w-full mq1400:hidden">
            <div className="h-[42px] w-[93px] relative leading-[150%] flex items-center shrink-0 whitespace-nowrap">
              Contact Us
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-center py-[0.5px] px-0">
              <div className="h-[42px] relative leading-[150%] flex items-center shrink-0 min-w-[107px] whitespace-nowrap">
                Privacy Policy
              </div>
            </div>
            <div className="h-[42px] w-[152px] relative leading-[150%] flex items-center shrink-0 whitespace-nowrap">{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
