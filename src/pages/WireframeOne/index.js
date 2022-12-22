import React from "react";

import { Column } from "components";
import { useNavigate } from "react-router-dom";

const WireframeOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/wireframetwo");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col justify-start mx-[auto] md:p-[105px] p-[153px] sm:p-[15px] w-[100%]">
        <div
          className="common-pointer bg-bluegray_100 sm:h-[35px] md:h-[45px] h-[65px] max-w-[338px] sm:mb-[347px] md:mb-[449px] mb-[653px] md:ml-[11px] sm:ml-[8px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          onClick={handleNavigate}
        ></div>
      </Column>
    </>
  );
};

export default WireframeOnePage;
