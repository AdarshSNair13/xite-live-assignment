const Feature = ({ title ,img,br}: any) => (
    <div className="relative">
    <img src={img}  className="w-full h-auto rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-white ">
        <h2 className=" mb-5 text-2xl font-bold">{title} <br /> {br}</h2>
        <button
            type="button"
            className="inline-block rounded bg-red-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            View All
          </button>
      </div>
    </div>
  </div>
);

const Grid = () => {
  const features = [
    {
      title: "Trend ",
      br:"cloud One",
      img:"/images/1.jpg"
    },
    {
      title: "Trend Managed ",
      br:"Service Partner",
      img:"/images/2.jpg"
    },
    {
      title: "Services ",
      br:"& Support",
      img:"/images/3.jpg"
    },
    {
      title: "Threat",
      br:"Landscape",
      img:"/images/4.jpg"
    },
    {
      title: "Trend ",
      br:"Vision One",
      img:"/images/5.jpg"
    },
    {
      title: "Trend",
      br:"Workforce One",
      img:"/images/6.jpg"
    },
  ];

  return (
    <section className="py-12 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Webinar Showcase
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
              <Feature title={feature.title} img={feature.img} br={feature.br}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;