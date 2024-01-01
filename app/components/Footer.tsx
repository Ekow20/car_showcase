import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="pxRes pb-6 pt-12">
      <div className="flex">
        <div className="flex-1">
          <div className="text-gray-500">
            <Image src={"/logo.svg"} alt="logo" width={120} height={30} />
            <p className="mt-6">Car Rental 2023</p>
            <p className="">All Rights Reserverd</p>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-4 justify-between">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="text-black font-bold">About</p>
            <p className="">How It Works</p>
            <p className="">Featured</p>
            <p className="">Partnership</p>
            <p className="">Business Relation</p>
          </div>
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="text-black font-bold">About</p>
            <p className="">How It Works</p>
            <p className="">Featured</p>
            <p className="">Partnership</p>
            <p className="">Business Relation</p>
          </div>
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="text-black font-bold">About</p>
            <p className="">How It Works</p>
            <p className="">Featured</p>
            <p className="">Partnership</p>
            <p className="">Business Relation</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-gray-500">
        <p className="">2023 Car Rental All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
