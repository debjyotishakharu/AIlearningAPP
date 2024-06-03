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
        <div className="rounded-11xl bg-lightcyan flex flex-row items-center justify-center py-[3px] px-[26px] whitespace-nowrap">
          <div className="relative leading-[150%] font-medium inline-block min-w-[127px]">
            UI/UX Developer
          </div>
        </div>
        <div className="rounded-11xl bg-lightcyan flex flex-row items-center justify-center py-[3px] px-8 whitespace-nowrap">
          <div className="relative leading-[150%] font-medium inline-block min-w-[116px]">
            ML\AI Engineer
          </div>
        </div>
        <div className="rounded-11xl bg-lightcyan flex flex-row items-center justify-center py-[3px] px-3.5 whitespace-nowrap">
          <div className="relative leading-[150%] font-medium">
            Software Developer
          </div>
        </div>
        <div className="rounded-11xl bg-lightcyan flex flex-row items-center justify-center py-[3px] px-14">
          <div className="relative leading-[150%] font-medium inline-block min-w-[67px]">
            Scientist
          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

export default Skills;
