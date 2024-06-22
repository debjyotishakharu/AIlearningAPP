import Main from "../components/main";
import Skills from "../components/skills";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[35px] gap-[9.5px] leading-[normal] tracking-[normal] border-[1px] border-solid border-black">
      <Main />
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-center max-w-full text-left text-21xl text-black font-heading mq450:gap-[35px] mq825:gap-[70px]">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[122px] max-w-full mq450:gap-[30px] mq825:gap-[61px]">
          <Skills />
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-center py-0 px-[30px] box-border max-w-full">
            <div className="w-[1360px] overflow-hidden flex flex-row items-center justify-between py-0 pr-[50px] pl-[30px] box-border max-w-full gap-[20px] mq1400:flex-wrap mq1400:pr-[25px] mq1400:box-border">
              <div className="w-[916px] flex flex-col items-start justify-center py-5 px-0 box-border gap-[24px] min-w-[916px] max-w-full lg:min-w-full mq1400:flex-1">
                <h1 className="m-0 w-[691px] relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
                  What is Knowthentic?
                </h1>
                <div className="self-stretch relative text-xl leading-[150%] text-gray text-justify mq450:text-base mq450:leading-[24px]">
                  Knowthentic is an AI-powered learning platform that helps you
                  discover the skills you need and creates a personalized
                  roadmap to achieve them. We recommend relevant courses,
                  articles, and tutorials - all in one place, so you can learn
                  smarter, not harder.
                </div>
              </div>
              <img
                className="w-[333px] relative rounded-xl max-h-full object-cover max-w-full mq1400:flex-1"
                loading="lazy"
                alt=""
                src="/Test.png"
              />
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-[30px] box-border max-w-full text-right mq450:gap-[27px] mq825:gap-[54px]">
            <div className="w-[1380px] overflow-hidden flex flex-row items-start justify-between py-0 pr-[60px] pl-10 box-border max-w-full gap-[19.28px] mq1400:flex-wrap mq1400:pr-[30px] mq1400:box-border">
              <img
                className="w-[333px] relative rounded-xl max-h-full object-cover max-w-full mq1400:flex-1"
                loading="lazy"
                alt=""
                src="/test2.png"
              />
              <div className="w-[943px] flex flex-col items-end justify-center py-[74px] pr-0 pl-[30px] box-border gap-[24px] max-w-full">
                <h1 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
                  How does it work?
                </h1>
                <div className="self-stretch relative text-xl leading-[150%] text-gray text-justify mq450:text-base mq450:leading-[24px]">
                  Simply tell us your desired skills or career goals. Our AI
                  analyzes your input and recommends a learning path with
                  resources tailored to your needs. You can track your progress
                  and stay motivated as you master new skills.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
