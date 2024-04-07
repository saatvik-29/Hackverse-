import React, { useState, useEffect } from "react";
const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://img.etimg.com/thumb/width-640,height-480,imgsize-29486,resizemode-75,msid-85510896/wealth/insure/health-insurance/how-to-file-reimbursement-claim-for-health-insurance-cover/cohealpol.jpg",
    "https://img.etimg.com/thumb/width-640,height-480,imgsize-499843,resizemode-75,msid-107345649/wealth/tax/tax-saving/taxation-tme-is-here-decode-how-you-can-realise-the-potential-of-multi-year-health-insurance-in-your-portfolio/lead-image-paint.jpg",
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FG20_image_b858836ae8.jpg&w=640&q=75",
    "https://img.etimg.com/thumb/width-640,height-480,imgsize-29486,resizemode-75,msid-85510896/wealth/insure/health-insurance/how-to-file-reimbursement-claim-for-health-insurance-cover/cohealpol.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-5">
            <div className="text-blue-700/95 mb-5">
              THE HEALTH INSURANCE SPECIALIST
            </div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We have the answer to your happy
              <br className="hidden lg:inline-block" />
              and secure future
            </h1>
            <p className="mb-8 leading-relaxed">
              Health plans for every stage of your life.
            </p>
            <div className="flex justify-center relative w-180 p-7 px-20 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 light:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                    >
                      PUID(Private Unique ID)
                    </label>
                    <input
                      type="tel"
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 light:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="8888 8888 8888 8888 8888"
                      required=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#f97316] hover:bg-[#fb923c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#f97316] dark:hover:bg-[#f97316] dark:focus:ring-[#fb923c]"
                >
                  Get a quote &gt;
                </button>
              </form>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-10/6">
            {images.map((image, index) => (
              <img
                key={index}
                className={`object-cover object-center rounded ${
                  index === currentImageIndex ? "block" : "hidden"
                }`}
                alt="hero"
                src={image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
