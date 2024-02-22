import StartRating from "@/components/StartRating";
import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
const info = [
 
  {
    title: "From",
    desc: "USA",
  },
  {
    title: " To",
    desc: "USA",
  },
  {
    breakLine: "-------------------------------------------",
    title: "Your trip",
    desc: "February 13, 2024 at 11:11 AM",
  },
  {
    breakLine: "------------------------------------------",
    title: "Journey time",
    desc: "About 41 min",
  },
  {
    title: "Distance",
    desc: "About 05 Miles",
  },
  {
    breakLine: "------------------------------------------",
    title: "Total Price",
    desc: "USD 15.00",
  },
  {
    breakLine: "------------------------------------------",
    title: "Passenger Name:",
    desc: "Muhammad Latif",
  },
  {
    title: "Passenger email:",
    desc: "latif@gmail.com",
  },
  {
    title: "Passenger mobile:",
    desc: "+92 3454466401",
  },
];
export interface PayPageProps {}

const PayPage: FC<PayPageProps> = () => {
  const renderContent = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl space-y-10 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Congratulation 🎉
        </h2>

        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* ------------------------ */}
        <div className="space-y-6">
          <div>
            <div className="max-w-6xl pl-5 pb-5 shadow-xl space-y-8 ">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Booking detail</h3>
                <div className="flex flex-col space-y-4">
                  <div className="flex text-neutral-6000 dark:text-neutral-300">
                    <span className="flex-1">Booking code</span>
                    <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                      #222-333-111
                    </span>
                  </div>
                  <div className="flex text-neutral-6000 dark:text-neutral-300">
                    <span className="flex-1">Date</span>
                    <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                      12 Aug, 2021
                    </span>
                  </div>
                  <div className="flex text-neutral-6000 dark:text-neutral-300">
                    <span className="flex-1">Total</span>
                    <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                      $199
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                    <span className="flex-1">Payment method</span>
                    <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                      Credit card
                    </span>
                  </div>
                </div>
              </div>
              {info.map((item, index) => (
                <div key={index}>
                  <p className="mb-4">{item.breakLine}</p>
                  <h3 className="uppercase font-semibold text-md dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------ */}

        <div>
          <ButtonPrimary href="/">Explore more stays</ButtonPrimary>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-PayPage`}>
      <main className="container mt-11 mb-24 lg:mb-32 ">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default PayPage;
