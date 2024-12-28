import React from "react";
import bnw from "../Components/images/bnwimg.jpg";

function Info() {
  return (
    <div className="relative">
      {/* Section with Fixed Background */}
      <div className="relative min-h-screen">
        {/* Fixed Background Image */}
        <img
          className="w-full h-full object-cover"
          src={bnw}
          alt="Background"
          style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        />

        {/* Overlay and Content */}
        <div className="bg-black bg-opacity-50 min-h-screen flex flex-col lg:flex-row items-center px-4 lg:px-[80px] gap-6 py-8">
        
          {/* Left Section: Scrolling Text */}
          <div className="w-full lg:w-2/3 overflow-y-auto">
            <div className="ml-2 px-2 md:px-8 lg:px-12">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-white font-semibold">
                The Education Crisis
              </h1>
              <p className="text-white text-justify text-xs sm:text-sm md:text-lg mt-4">
                According to the United Nations Educational, Scientific and
                Cultural Organisation (UNESCO), as of 2020, a staggering 763
                million young individuals and adults still lacked essential
                literacy skills. Recent crises – the COVID-19 pandemic, climate
                change impacts, and conflicts – have only worsened the existing
                challenges.
              </p>
              <p className="text-white text-justify text-xs sm:text-sm md:text-lg mt-4">
                In India, in terms of education level, 9,30,531 children were
                identified as out of school at the elementary level and 3,22,488
                at the secondary level. (National Education Ministry, 2022-23)
              </p>
              <p className="text-white text-justify text-xs sm:text-sm md:text-lg mt-4">
                The literacy rate in rural India is 67.77 per cent, while in
                urban India, it is 84.11 per cent. Although the literacy rate
                gap in urban and rural areas is steadily declining, the divide
                still exists.
              </p>
            </div>
          </div>

          {/* Right Section: Stats */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-8 lg:mt-0">
            <div className="flex flex-col items-center">
              {/* Heading Section */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAEC19] mb-4 relative">
                1.2 Million
              </h2>
              <p className="text-[#FAEC19] mb-8">Children out of school</p>

              {/* Horizontal Line */}
              <div className="w-[53%] border-t-2 border-[#f1ecaa] relative lg:flex hidden">
                {/* Connecting Vertical Lines */}
              </div>

              {/* Children Dropout Stats Section */}
              <div className="flex lg:flex-row flex-col items-center space-y-8 lg:space-y-0 lg:space-x-8 relative">
                {/* First Child Data */}
                <div className="flex flex-col items-center">
                  {/* Vertical Line */}
                  <div className="w-0.5 h-24 bg-[#f3efb0] lg:flex hidden"></div>
                  {/* Circle */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#646464] rounded-full flex items-center justify-center text-[#FAEC19] lg:text-xl text-md font-bold border-[#FFFFFF] border-[8px]">
                    9,30,531
                  </div>
                  {/* Description */}
                  <p className="text-[#FAEC19] text-center mt-2">
                    Children dropped out of school at the{" "}
                    <span className="font-semibold">ELEMENTARY</span> level
                  </p>
                </div>

                {/* Second Child Data */}
                <div className="flex flex-col items-center">
                  {/* Vertical Line */}
                  <div className="w-0.5 h-24 bg-[#f3efb3] lg:flex hidden" ></div>
                  {/* Circle */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#646464] rounded-full flex items-center justify-center text-[#FAEC19] lg:text-xl text-md font-bold border-[#FFFFFF] border-[8px]">
                    3,22,488
                  </div>
                  {/* Description */}
                  <p className="text-[#FAEC19] text-center mt-2">
                    Children dropped out of school at the{" "}
                    <span className="font-semibold">SECONDARY</span> level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections of the Website */}
    </div>
  );
}

export default Info;
