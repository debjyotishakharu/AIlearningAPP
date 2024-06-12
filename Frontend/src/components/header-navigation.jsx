import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderNavigation = ({ className = "" }) => {
  const navigate = useNavigate();

  const onItemsContainerClick = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-[22px] px-[46px] gap-[20px] text-left text-29xl text-black font-righteous mq825:pl-[23px] mq825:pr-[23px] mq825:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-4" onClick={onLogoClick} style={{ cursor: "pointer" }}>
        <img
          className="h-[120px] w-[60px] object-cover"
          loading="lazy"
          alt="SkillSage logo"
          src="/nobg3-1@2x.png"
        />
        <h1 className="text-29xl font-righteous m-0">
          SkillSage
        </h1>
      </div>
      {/* <div className="flex flex-row items-center justify-end text-base text-white font-heading">
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
      </div> */}
    </header>
  );
};

HeaderNavigation.propTypes = {
  className: PropTypes.string,
};

export default HeaderNavigation;
