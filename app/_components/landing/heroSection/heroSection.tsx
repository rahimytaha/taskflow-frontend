import React from "react";
import heroSectionMember from "../../../../public/svg/heroSectionMember.svg";
import heroSectionTodo from "../../../../public/svg/heroSectionTodo.svg";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div>
      <div>
        <h3 className="font-sans items-center flex-wrap mx-auto  w-217.5 text-center   justify-center  mt-32  flex   font-bold text-5xl gap-3   ">
          Manage Your{" "}
          <Image alt="hero Section Member Svg" src={heroSectionMember} /> Team's{" "}
          <Image alt="hero Section Todo Svg" src={heroSectionTodo} />{" "}
          Productivity
        </h3>
        <h6 className="font-sans font-medium w-141 text-center mx-auto mt-8  text-xl  text-black/70 ">
          Plan projects, stay on track, and deliver on time without overworking
          your team.
        </h6>
      </div>
      <div className="flex justify-center mt-14 ">
        <Link
          className="border-4 border-b-8 border-r-8 py-4 px-9 font-bold text-xl text-white bg-[#975BEC] border-[#7345B3] mx-auto    rounded-[58px]  "
          href={"/"}
        >
          Try Now - Free!
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
