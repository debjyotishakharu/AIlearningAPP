import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderNavigation = ({ className = "" }) => {
  const navigate = useNavigate();

  const onItemsContainerClick = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-between py-[22px] px-[46px] gap-[20px] text-left text-29xl text-black font-righteous mq825:flex-wrap mq825:pl-[23px] mq825:pr-[23px] mq825:box-border ${className}`}
    >
      <div className="w-[297px] overflow-hidden shrink-0 flex flex-row items-start justify-between min-w-[297px] mq825:flex-1">
        <img
          className="h-[108px] w-[108px] relative object-cover shrink-0"
          loading="lazy"
          alt=""
          src="/nobg3-1@2x.png"
        />
        <div className="overflow-hidden flex flex-col items-center justify-end pt-6 px-0 pb-0 z-[1]">
          <h1 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit">
            SkillSage
          </h1>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-center justify-end pt-[34px] px-0 pb-0 text-base text-white font-heading">
        <div
          className="flex flex-row items-center justify-end cursor-pointer"
          onClick={onItemsContainerClick}
        >
          <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-black flex flex-row items-center justify-center py-3.5 px-6 whitespace-nowrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[60px]">
              SIGN IN
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderNavigation.propTypes = {
  className: PropTypes.string,
};

export default HeaderNavigation;
