import Image from "next/image";
import React from "react";
import fullLogo from "../../../public/svg/fullLogo.svg";
import Link from "next/link";
const Header = () => {
  return (
    <header className=" mx-[152.5px] mt-11 px-6 flex justify-between items-center ">
      <div className="flex ">
        <Image alt="full task flow logo" src={fullLogo} />
        <div className="gap-9 flex items-center ml-16     ">
          <Link className="font-sans font-  text-base" href={""}>Pricing</Link>
          <Link className="font-sans font-  text-base"href={""}>Download</Link>
          <Link className="font-sans font-  text-base"href={""}>Integrations</Link>
        </div>
      </div>
      <div>
        <Link href={""} className="border-[3px]   border-b-[5px]   border-r-[5px] rounded-4xl font-sans font-bold text-xl px-8 py-4 "> Join Free</Link>
      </div>
    </header>
  );
};

export default Header;
