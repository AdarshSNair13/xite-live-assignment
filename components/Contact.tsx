const Contact = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="mx-auto max-w-[700px] md:px-3">
          <h2 className="mb-12 text-3xl font-bold text-white">Talk to Us</h2>
          <div className="p-6 space-y-6">
            <form action="#">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="First Name*"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Last Name*"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Select Topic"
                  />
                </div>
              </div>
            </form>
          </div>
          <button
            type="button"
            className="inline-block rounded bg-red-800 px-6 pb-2 pt-2.5 text-xs font-semibold leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;