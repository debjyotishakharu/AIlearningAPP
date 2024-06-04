import SkillSelection from "../components/skill-selection";
import DuplicatePayment from "../components/duplicate-payment";

const SkillPlan = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[96.4px] box-border gap-[78px] leading-[normal] tracking-[normal] mq450:gap-[19px] mq750:gap-[39px]">
      <SkillSelection />
      <form className="m-0 w-[1158px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[10.1px] max-w-full">
        <div className="w-[1117px] overflow-hidden flex flex-col items-end justify-center py-0 px-[303px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[151px] mq1125:pr-[151px] mq1125:box-border mq750:pl-[75px] mq750:pr-[75px] mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative text-5xl leading-[150%] font-heading text-black text-left mq450:text-lgi mq450:leading-[29px]">
              What skill do you want to learn?
            </b>
            <div className="self-stretch h-[] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white box-border flex flex-row items-start justify-center py-3 px-5 border-[4px] border-solid border-gainsboro-200">
              <input
                className="w-[263px] [border:none] [outline:none] font-medium font-heading text-base bg-[transparent] h-6 relative leading-[150%] text-gray text-left inline-block p-0"
                placeholder="Placeholder"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[11px] max-w-full">
          <div className="overflow-hidden flex flex-col items-end justify-center py-0 px-[301px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1025:pl-[150px] mq1025:pr-[150px] mq1025:box-border">
            <b className="relative text-5xl tracking-[0.02em] font-red-hat-display text-black text-left mq450:text-lgi">
              Current Proficiency
            </b>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center max-w-full">
            <div className="w-[857px] overflow-x-auto flex flex-row items-center justify-between pt-0 pb-px pr-0 pl-5 box-border gap-[15px] max-w-full">
              <div className="w-[269px] rounded-2xl box-border shrink-0 flex flex-col items-start justify-start pt-[23px] px-6 pb-1 border-[1px] border-solid border-gray-1">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <img
                      className="h-[23.7px] w-[38px] relative hidden"
                      alt=""
                      src="/credit.svg"
                    />
                    <b className="relative text-xl font-semibold font-red-hat-display text-black text-left inline-block min-w-[83px] mq450:text-base">
                      Begineer
                    </b>
                  </div>
                  <img
                    className="h-[25px] w-[25px] relative"
                    alt=""
                    src="/checked.svg"
                  />
                </div>
              </div>
              <div className="w-[269px] rounded-2xl box-border shrink-0 flex flex-col items-start justify-start pt-[23px] px-6 pb-1 border-[1px] border-solid border-gray-1">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <img
                      className="h-[23.7px] w-[38px] relative hidden"
                      alt=""
                      src="/paypal.svg"
                    />
                    <b className="relative text-xl font-semibold font-red-hat-display text-black text-left inline-block min-w-[75px] mq450:text-base">
                      Medium
                    </b>
                  </div>
                  <img
                    className="h-[25px] w-[25px] relative"
                    alt=""
                    src="/checked-1.svg"
                  />
                </div>
              </div>
              <div className="w-[269px] rounded-2xl box-border shrink-0 flex flex-col items-start justify-start pt-[23px] px-6 pb-1 border-[1px] border-solid border-gray-1">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <img
                      className="h-[23.7px] w-[38px] relative hidden"
                      alt=""
                      src="/google-pay.svg"
                    />
                    <b className="relative text-xl font-semibold font-red-hat-display text-black text-left inline-block min-w-[92px] mq450:text-base">
                      Advanced
                    </b>
                  </div>
                  <img
                    className="h-[25px] w-[25px] relative"
                    alt=""
                    src="/checked.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DuplicatePayment />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[393px] box-border max-w-full mq450:pl-5 mq450:box-border mq1025:pl-[196px] mq1025:box-border">
          <button className="cursor-pointer [border:none] pt-[22px] pb-[20.2px] pr-5 pl-[21px] bg-white w-[343px] rounded-11xl flex flex-row items-start justify-center box-border relative whitespace-nowrap max-w-full hover:bg-gainsboro-100">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-aliceblue" />
            <b className="relative text-base tracking-[0.02em] uppercase font-bold font-red-hat-display text-gray-1 text-center z-[1]">
              Generate Roadmap
            </b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillPlan;
