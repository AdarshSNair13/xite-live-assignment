import React from "react";

const Feature = ({ title }: any) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-black">
    <div className="relative">
    <img src="/1.jpg"  className="w-full h-auto rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
    <div className="absolute inset-0 flex items-center left-5">
      <div className="text-white ">
        <button
            type="button"
            className="inline-block rounded border px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Trend Cloud One
          </button>
           <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Workload <br />Security Demo
        </h5>
        <p className="text-white">06 Apr 2023 | 14.3-15.30(SGST)</p>
      </a>
      </div>
    </div>
  </div>
    <div className="p-5">
      <p className=" font-bold text-white">
        SPEAKER:
        <br />
        ROADGERS KOESCH
      </p>
      <p className="text-red-700 py-2">Technical Sales Engineer,Trend Micro</p>
      <p className="mb-3 font-bold text-white">
        EPISODE 01
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Register Now
      </a>
    </div>
  </div>
);

const GridEvents = () => {
  const features = [
    {
      title: "Trend cloud One",
    },
    {
      title: "Trend cloud One",
    },
    {
      title: "Trend cloud One",
    },
  ];

  return (
    <section className="py-12 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Upcomming Events
          </h2>
          <p className="mb-4 text-white">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full "></div>
              </div>
              <Feature title={feature.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridEvents;
