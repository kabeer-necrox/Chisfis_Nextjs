import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageContactProps {}

const info = [
  {
    title: "Your booking details",
  },
  {
    title: "From",
    desc: "USA",
  },
  {
    title: " To",
    desc: "USA",
  },
  {
    breakLine:"-------------------------------------------",
    title: "Your trip",
    desc: "February 13, 2024 at 11:11 AM",
  },
  {
    breakLine:"------------------------------------------",
    title: "Journey time",
    desc: "About 41 min",
  },
  {
    title: "Distance",
    desc: "About 05 Miles",
  },
  {
    breakLine:"------------------------------------------",
    title: "Total Price",
    desc: "USD 15.00",
  },
];

const PageContact: FC<PageContactProps> = ({}) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Passenger details
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-md pl-3 pb-3 shadow-xl space-y-8 ">
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
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Mobile Number</Label>

                  <Input
                    type="email"
                    placeholder="Enter your phone number "
                    className="mt-1"
                  />
                </label>
               
                <div>
                  <ButtonPrimary type="submit">continue to book</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <SectionSubscribe2 className="pb-24 lg:pb-32" />
      </div>
    </div>
  );
};

export default PageContact;
