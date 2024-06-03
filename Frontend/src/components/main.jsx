import { useCallback } from "react";
import HeaderNavigation from "./header-navigation";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/skill-plan");
  }, [navigate]);

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-end gap-[15px] max-w-full ${className}`}
    >
      <HeaderNavigation />
      <section className="w-[942px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full text-center text-17xl text-black font-heading">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq450:text-3xl mq825:text-10xl">
          Navigate the Path to Mastery.
        </h1>
        <div className="self-stretch relative text-base leading-[150%] text-gray">
          Struggling to find the right resources to learn in-demand skills? Our
          AI-powered app takes the guesswork out of learning. Simply tell us
          your goals, and we'll recommend a customized roadmap along with the
          best online courses, articles, and tutorials!
        </div>
        <button
          className="cursor-pointer [border:none] py-3.5 px-5 bg-black w-[300px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-31xl flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-gray-1"
          onClick={onButtonClick}
        >
          <div className="relative text-xl leading-[150%] font-medium font-heading text-white text-left">
            Plan Your Skill
          </div>
        </button>
      </section>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
