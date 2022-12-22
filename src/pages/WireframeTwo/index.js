import React from "react";

import { Column } from "components";
import { useNavigate } from "react-router-dom";

const WireframeTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col justify-start mx-[auto] p-[112px] sm:p-[15px] md:p-[77px] w-[100%]">
        <div
          className="common-pointer bg-bluegray_100 sm:h-[244px] md:h-[316px] h-[458px] max-w-[387px] md:mb-[126px] mb-[184px] sm:mb-[98px] ml-[auto] mr-[auto] md:mt-[108px] mt-[158px] sm:mt-[84px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          onClick={handleNavigate1}
        ></div>
      </Column>
    </>
  );
};

export default WireframeTwoPage;
