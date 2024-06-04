import PropTypes from "prop-types";

const SkillSelection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-29xl text-black font-righteous ${className}`}
    >
      <div className="self-stretch h-[136px] overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full">
        <div className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start py-7 px-[55px] box-border max-w-full mq450:gap-[451px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="w-[294px] overflow-hidden flex flex-row items-center justify-between gap-[-23px]">
            <img
              className="h-[108px] w-[114px] relative object-cover shrink-0"
              loading="lazy"
              alt=""
              src="/nobg3-11@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit shrink-0 z-[1] mq450:text-10xl mq450:leading-[43px] mq1025:text-19xl mq1025:leading-[58px]">
              SkillSage
            </h1>
          </div>
        </div>
      </div>
      <h1 className="m-0 self-stretch relative text-21xl tracking-[0.02em] uppercase font-bold font-red-hat-display text-center mq450:text-5xl mq1025:text-13xl">
        Plan your skill
      </h1>
    </section>
  );
};

SkillSelection.propTypes = {
  className: PropTypes.string,
};

export default SkillSelection;
