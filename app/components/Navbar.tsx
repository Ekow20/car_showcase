import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomBtn from "./CustomBtn";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex items-center justify-between pxRes py-4 max-w-[1440px] mx-auto">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={120}
            height={30}
            className="object-contain"
          />
        </Link>
        <CustomBtn
          title="Sign In"
          btnStyle="bg-white text-primary-blue rounded-full "
        />
      </nav>
    </header>
  );
};

export default Navbar;
