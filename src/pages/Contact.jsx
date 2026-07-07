import React from "react";
import { LuArrowRight } from "react-icons/lu";
import Layout from "../components/Layout";

const ContactUs = () => {
  return (
    <Layout withBg>
      <div className="bg-[#fff] min-h-screen flex items-center justify-center p-6 md:px-12 !pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Get in — <br />
              <span className="text-gray-900">touch with us</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              We’re here to help! Whether you have a question about our
              services, need assistance with your account, or want to provide
              feedback, our team is ready to assist you.
            </p>

            <div className="space-y-6 pt-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Email:
                </p>
                <p className="text-xl font-medium text-gray-900 mt-1">
                  info@anamqatar.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Phone:
                </p>
                <p className="text-xl font-medium text-gray-900 mt-1">
                  +974 30081007
                </p>
              </div>

              <p className="text-sm text-gray-500">
                Available Monday to Friday, 9 AM - 6 PM GMT
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Firs Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name..."
                    className="w-full bg-[#f4f4f4] border-none p-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name..."
                    className="w-full bg-[#f4f4f4] border-none p-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full bg-[#f4f4f4] border-none p-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  How can we help you?
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter your message..."
                  className="w-full bg-[#f4f4f4] border-none p-6 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button className="px-8 py-4 bg-primary text-white font-semibold hover:bg-primary flex items-center hover:text-white transition-colors duration-300">
                  Submit
                  <span className="block ml-2">
                    <LuArrowRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
