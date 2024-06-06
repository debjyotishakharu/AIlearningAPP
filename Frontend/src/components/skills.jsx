import PropTypes from "prop-types";

const Skills = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center text-center text-xl text-black font-heading ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5">
          <img
            className="w-[286px] h-[286px] relative object-cover"
            loading="lazy"
            alt=""
            src="/-bc6d656ab4d2470ab2508a68778a0d7aphotoroom-1@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5 z-[1] mt-[-17px]">
          <b className="w-[248px] h-[58px] relative leading-[150%] font-bold flex items-center justify-center shrink-0 mq450:text-base mq450:leading-[24px]">
            Popular Skills
          </b>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-between pt-0 pb-4 pr-[53px] pl-[33px] gap-[20px] text-left text-base mq825:pr-[26px] mq825:box-border">
        <button className="cursor-pointer [border:none] pt-[22px] pb-[20.2px] pr-5 pl-[21px] bg-white w-[343px] rounded-11xl flex flex-row items-start justify-center box-border relative whitespace-nowrap max-w-full hover:bg-gainsboro-100">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-aliceblue" />
          <b className="relative text-base tracking-[0.02em] uppercase font-bold font-red-hat-display text-gray-1 text-center z-[1]">
            UI/UX Developer
          </b>
        </button>
        <button className="cursor-pointer [border:none] pt-[22px] pb-[20.2px] pr-5 pl-[21px] bg-white w-[343px] rounded-11xl flex flex-row items-start justify-center box-border relative whitespace-nowrap max-w-full hover:bg-gainsboro-100">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-aliceblue" />
          <b className="relative text-base tracking-[0.02em] uppercase font-bold font-red-hat-display text-gray-1 text-center z-[1]">
            ML/AI Engineer
          </b>
        </button>
        <button className="cursor-pointer [border:none] pt-[22px] pb-[20.2px] pr-5 pl-[21px] bg-white w-[343px] rounded-11xl flex flex-row items-start justify-center box-border relative whitespace-nowrap max-w-full hover:bg-gainsboro-100">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-aliceblue" />
          <b className="relative text-base tracking-[0.02em] uppercase font-bold font-red-hat-display text-gray-1 text-center z-[1]">
            Software Developer
          </b>
        </button>
      </div>
    </div>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

export default Skills;
