// import { Avatar } from "@mantine/core";
import React from "react";

const SkillBadge = (skills: []) => {
  return skills.map((skill: any, index: number) => (
    <div
      className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1"
      key={index}
    >
      <img
        className="!w-[24px] xsm-mx:w-[28px] bs-mx:w-[36px] !p-1"
        src={`/Icons/${skill}.png`}
      />

      <div className="text-textColor text-xl font-medium">{skill}</div>
    </div>
  ));
};

const SkillCard = (props: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="border border-primaryColor w-[47%] shadow-[0_0_10px_0_#64FFDA50] p-5 rounded-3xl bs-mx:p-3 sm-mx:w-full"
    >
      <div className="text-3xl text-white mb-4 text-center font-bold sm-mx:text-2xl xs-mx:text-xl">
        {props.title}
      </div>
      <div className="flex flex-wrap gap-3 justify-center bs-mx:gap-2">
        {SkillBadge(props.skills)}
      </div>
    </div>
    /* <div data-aos="fade-up"   data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl  mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full ">
        <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold ">{props.title}</div>
        <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
            {SkillBadge(props.skills)}
        </div> */
  );
};

export default SkillCard;
