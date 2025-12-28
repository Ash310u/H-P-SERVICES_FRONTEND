import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Images
import koushik11 from "../assets/koushik11.png";
import koushik12 from "../assets/koushik12.png";

export default function Partner() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full bg-[#E4EEF0] py-[110px] px-[5%] text-center max-md:py-20 max-sm:py-12">
      {/* Decorative Circles */}
      <div className="relative w-full max-w-[1400px] mx-auto -mb-10 h-0 max-md:hidden">
        <div className="absolute w-20 h-20 bg-[#075056] rounded-full -top-10 left-[5%]"></div>
        <div className="absolute w-20 h-20 bg-[#075056] rounded-full -top-10 right-[5%]"></div>
      </div>

      {/* Title */}
      <div className="flex justify-center items-start gap-2 mb-[70px] max-lg:mb-14 max-md:mb-10 max-sm:mb-8">
        <h2 className="text-[110px] font-extrabold text-[#075056] -mt-8 leading-none max-lg:text-[80px] max-lg:-mt-6 max-md:text-[60px] max-md:-mt-4 max-sm:text-[50px] max-sm:-mt-3">
          P
        </h2>
        <h2 className="text-[50px] font-extrabold mt-[15px] leading-[1.1] -ml-2 max-lg:text-4xl max-lg:mt-3 max-lg:-ml-1.5 max-md:text-3xl max-md:mt-2 max-md:-ml-1 max-sm:text-2xl max-sm:mt-1.5 max-sm:-ml-0.5">
          ARTNERS PROFILE
        </h2>
      </div>

      {/* Decorative Lines */}
      <div className="relative w-full max-w-[1400px] mx-auto my-5 mb-[70px] h-0 max-md:hidden">
        <div className="absolute w-1 h-[400px] bg-[#075056] top-0 left-[5%]"></div>
        <div className="absolute w-1 h-[400px] bg-[#075056] top-0 right-[5%]"></div>
      </div>

      {/* Card Container */}
      <div className="flex justify-center gap-[90px] mt-[70px] pb-[100px] items-start max-lg:gap-[60px] max-md:flex-col max-md:gap-10 max-md:pb-[60px] max-md:mt-10 max-sm:gap-6 max-sm:pb-10 max-sm:mt-8">
        {/* Card 1 - Koushik Paul */}
        <div
          className="group w-[330px] bg-[#0d5a5b] rounded-[18px] overflow-hidden flex flex-col relative transition-all duration-300 ease-in-out transform translate-z-0 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-md:w-full max-md:max-w-[360px] max-md:mx-auto max-sm:max-w-[320px]"
          data-aos="fade-up"
        >
          {/* Image Wrapper */}
          <div className="h-[350px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center pt-10 overflow-hidden relative z-0 max-md:h-[300px] max-md:pt-[30px] max-sm:h-[260px] max-sm:pt-6">
            <img 
              src={koushik11} 
              alt="Koushik Paul" 
              className="w-[260px] object-contain transition-transform duration-500 ease-in-out origin-center group-hover:scale-[1.12] group-hover:-translate-y-1.5 max-md:w-[220px] max-sm:w-[190px]" 
            />
          </div>

          {/* Name Bar */}
          <div className="bg-[#004D4F] text-white py-3.5 text-xl font-bold mt-5 text-center relative z-[5] transition-all duration-[400ms] ease-in-out max-md:text-lg max-md:py-3 max-sm:text-base max-sm:py-2.5 group-hover:!mt-0 group-hover:!bg-[#0c5b5f]">
            KOUSHIK PAUL
          </div>

          {/* Hover Info */}
          <div className="bg-[#0c5b5f] text-white opacity-0 invisible max-h-0 overflow-hidden -translate-y-2.5 transition-all duration-[400ms] ease-in-out px-5 max-sm:px-4 group-hover:!opacity-100 group-hover:!visible group-hover:!max-h-[500px] group-hover:!translate-y-0 group-hover:!py-5 max-sm:group-hover:!py-4">
            <h4 className="text-[13px] font-semibold mb-2.5 text-[#a4dfe3] max-sm:text-xs max-sm:mb-2">
              Partner – Operations & Decision-Making Head of Projects
            </h4>
            <p className="text-[13px] leading-[1.6] m-0 max-sm:text-xs">
              Koushik Paul oversees project execution, operational compliance,
              and project-level strategic decisions. Drawing from his
              experience at Jindal Steel Ltd., he ensures timely, high-quality
              project delivery while managing teams and also operational
              processes across all sites.
            </p>
          </div>
        </div>

        {/* Card 2 - Abhradeep Hazra */}
        <div
          className="group w-[330px] bg-[#0d5a5b] rounded-[18px] overflow-hidden flex flex-col relative transition-all duration-300 ease-in-out transform translate-z-0 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-md:w-full max-md:max-w-[360px] max-md:mx-auto max-sm:max-w-[320px]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Image Wrapper */}
          <div className="h-[350px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center pt-10 overflow-hidden relative z-0 max-md:h-[300px] max-md:pt-[30px] max-sm:h-[260px] max-sm:pt-6">
            <img 
              src={koushik12} 
              alt="Abhradeep Hazra" 
              className="w-[260px] object-contain transition-transform duration-500 ease-in-out origin-center group-hover:scale-[1.12] group-hover:-translate-y-1.5 max-md:w-[220px] max-sm:w-[190px]" 
            />
          </div>

          {/* Name Bar */}
          <div className="bg-[#004D4F] text-white py-3.5 text-xl font-bold mt-5 text-center relative z-[5] transition-all duration-[400ms] ease-in-out max-md:text-lg max-md:py-3 max-sm:text-base max-sm:py-2.5 group-hover:!mt-0 group-hover:!bg-[#0c5b5f]">
            ABHRADEEP HAZRA
          </div>

          {/* Hover Info */}
          <div className="bg-[#0c5b5f] text-white opacity-0 invisible max-h-0 overflow-hidden -translate-y-2.5 transition-all duration-[400ms] ease-in-out px-5 max-sm:px-4 group-hover:!opacity-100 group-hover:!visible group-hover:!max-h-[500px] group-hover:!translate-y-0 group-hover:!py-5 max-sm:group-hover:!py-4">
            <h4 className="text-[13px] font-semibold mb-2.5 text-[#a4dfe3] max-sm:text-xs max-sm:mb-2">
              Partner – Administrative Head & Group Decision-Making
            </h4>
            <p className="text-[13px] leading-[1.6] m-0 max-sm:text-xs">
              Koushik Paul leads the administrative functions, finance,
              legal compliance, and corporate governance. With extensive
              experience at DSS Group, he is pivotal in group-level strategic
              decision-making, ensuring H & P Projects operates efficiently,
              ethically, and in line with best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
