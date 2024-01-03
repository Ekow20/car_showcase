import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-3 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute top-2 right-2 w-fit p-2 bg-primary-blue-100 rounded-full z-10"
                  onClick={closeModal}
                >
                  <Image
                    src={"/close.svg"}
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="bg-pattern bg-cover bg-center w-full h-40 rounded-lg relative">
                    <Image
                      fill
                      priority
                      src={"/hero.png"}
                      alt="car model"
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 bg-primary-blue-100 rounded relative h-24">
                      <Image
                        fill
                        priority
                        src={"/hero.png"}
                        alt="car model"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 bg-primary-blue-100 rounded relative h-24">
                      <Image
                        fill
                        priority
                        src={"/hero.png"}
                        alt="car model"
                        className="object-contain"
                      />
                    </div>{" "}
                    <div className="flex-1 bg-primary-blue-100 rounded relative h-24">
                      <Image
                        fill
                        priority
                        src={"/hero.png"}
                        alt="car model"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <h2 className="capitalize font-semibold my-6 text-xl">
                    {car.make} {car.model}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {Object.entries(car).map(([key, value]) => (
                      <div className="flex justify-between" key={key}>
                        <h4 className="capitalize text-grey">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
