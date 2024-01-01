"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CarDetails from "./CarDetails";
import CustomBtn from "./CustomBtn";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    city_mpg,
    class: carClass,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  return (
    <div className="car-card group">
      <div className="car-card_content">
        <h2 className="car-card_content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-sm">
        <span className="">$</span>
        <span className="font-bold text-3xl">54</span>
        <span className="self-end">/day</span>
      </p>

      <div className="w-full h-40 relative my-3">
        <Image
          fill
          priority
          src={"/hero.png"}
          alt="car model"
          className="object-contain"
        />
      </div>

      <div className="w-full flex justify-between group-hover:hidden">
        <div className="flex flex-col gap-2 items-center">
          <Image src={"/steering-wheel.svg"} height={20} width={20} alt="" />
          <p className="text-sm">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src={"/tire.svg"} height={20} width={20} alt="" />
          <p className="text-sm">{drive.toUpperCase()}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src={"/gas.svg"} height={20} width={20} alt="" />
          <p className="text-sm">{city_mpg} MPG</p>
        </div>
      </div>

      <div className="w-full hidden group-hover:block">
        <CustomBtn
          title="View More"
          btnStyle="bg-primary-blue py-6 rounded-full w-full text-white
           font-bold text-sm "
          rightIcon="/right-arrow.svg"
          handleClick={() => setModalOpen(true)}
        />
      </div>

      <CarDetails
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
