import React from "react";

const BlockchainClaimProcess = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {/* Step 1: Initiate Claim */}
            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  Initiate Claim
                </h2>
                <p className="leading-relaxed">
                  Begin the claim process by submitting your details and incident information securely on the blockchain.
                </p>
              </div>
            </div>

            {/* Step 2: Authentication */}
            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 11V13M12 17H12.01M19 11H21V21H3V11H5V9A7 7 0 0112 2A7 7 0 0119 9V11Z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  Blockchain Authentication
                </h2>
                <p className="leading-relaxed">
                  Authenticate your claim using a unique blockchain signature, ensuring security and transparency.
                </p>
              </div>
            </div>

            {/* Step 3: Verification */}
            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  Claim Verification
                </h2>
                <p className="leading-relaxed">
                  The claim is verified on the blockchain network, ensuring all information is accurate and immutable.
                </p>
              </div>
            </div>

            {/* Step 4: Settlement */}
            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10H21V12H3V10Z"></path>
                  <path d="M3 6H21V8H3V6Z"></path>
                  <path d="M3 14H21V16H3V14Z"></path>
                  <path d="M3 18H21V20H3V18Z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  Claim Settlement
                </h2>
                <p className="leading-relaxed">
                  Upon successful verification, the claim is settled, with all transactions recorded on the blockchain for transparency.
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://img.freepik.com/free-photo/digital-background-with-cybernetic-particles_23-2148828833.jpg?w=1060&t=st=1691513719~exp=1691514319~hmac=12f95154ba653158191ee4919ea51a55a5f8910648d7b7f7a518c46d7204ef95"
            alt="blockchain insurance claim process"
          />
        </div>
      </div>
    </section>
  );
};

export default BlockchainClaimProcess;
