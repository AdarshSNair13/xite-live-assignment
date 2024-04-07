"use client";

import { useState } from "react";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="mx-auto max-w-[700px] md:px-3">
          <h2 className="mb-12 text-3xl font-bold text-white">Talk to Us</h2>
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="First Name*"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Last Name*"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    id="message"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="message"
                  />
                </div>
              </div>
              <div className="py-10">
                <button
                  type="submit"
                  className="inline-block rounded bg-red-800 px-6 pb-2 pt-2.5 text-xs font-semibold leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="bg-slate-100 flex flex-col">
              {error &&
                error.map((e, index) => (
                  <div
                    key={index}
                    className={`${
                      success ? "text-green-800" : "text-red-600"
                    } px-5 py-2`}
                  >
                    {e}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
