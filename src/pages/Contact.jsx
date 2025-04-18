import React from "react";

const Contact = () => {
  return (
    <div className="store-container">
      <div className="flex items-center gap-3 mt-10">
        <div className="text-gray-600">Home</div>
        <div>/</div>
        <div className="text-gray-600 font-bold">About</div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <div className="bg-white shadow-md rounded-lg p-8 space-y-10">
            {/* Call Us */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call To Us</h3>
                <p className="text-gray-600 mt-1">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-gray-800 mt-1">Phone: +8801611112222</p>
              </div>
            </div>

            <hr />

            {/* Write To Us */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Write To US</h3>
                <p className="text-gray-600 mt-1">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-800 mt-1">
                  Emails: customer@exclusive.com
                </p>
                <p className="text-gray-800">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              {/* Top Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-gray-100 p-3 rounded-md focus:outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="bg-gray-100 p-3 rounded-md focus:outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="bg-gray-100 p-3 rounded-md focus:outline-none w-full"
                />
              </div>

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="bg-gray-100 p-3 rounded-md focus:outline-none w-full"
              />

              {/* Submit Button */}
              <div className="w-full text-right mt-2 mb-2">
                <button className="button-theme secondaryColorBg shadow-gray-400 text-slate-100 py-1.5">
                  Send Massage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
