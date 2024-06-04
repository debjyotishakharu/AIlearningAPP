import PropTypes from "prop-types";

const DuplicatePayment = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-5xl text-black font-red-hat-display mq750:gap-[25px] ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="overflow-hidden flex flex-col items-end justify-center py-0 px-[301px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1025:pl-[150px] mq1025:pr-[150px] mq1025:box-border">
          <b className="relative tracking-[0.02em] font-bold mq450:text-lgi">
            Learning Pace
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center max-w-full text-xl text-black">
          <div className="w-[857px] overflow-x-auto flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[15px] max-w-full">
            <div className="w-[269px] rounded-2xl box-border shrink-0 flex flex-col items-start justify-start pt-[23px] px-6 pb-1 border-[1px] border-solid border-gray-1">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="h-[23.7px] w-[38px] relative hidden"
                    alt=""
                    src="/credit.svg"
                  />
                  <b className="relative font-semibold inline-block min-w-[44px] mq450:text-base">
                    Slow
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
                  <b className="relative font-semibold inline-block min-w-[75px] mq450:text-base">
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
                  <b className="relative font-semibold inline-block min-w-[39px] mq450:text-base">
                    Fast
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
    </div>
  );
};

DuplicatePayment.propTypes = {
  className: PropTypes.string,
};

export default DuplicatePayment;
