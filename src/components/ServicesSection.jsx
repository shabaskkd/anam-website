import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import qatar from "../assets/images/qatar.jpeg";

const ServiceSection = () => {
  return (
    <div className="mx-autotext-black py-10">
      <div className="container px-6 mx-auto flex items-center justify-center md:flex-row flex-col gap-16 ">
        <div className="md:h-[400px] h-[200px]">
          <div className="relative w-full max-w-sm h-full overflow-hidden group">
            <div className="relative h-full group-hover:scale-110 transition-transform duration-700">
              <img
                src={qatar}
                alt="Industrial Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 z-10 bg-primary opacity-50 transition-opacity duration-700" />
          </div>
        </div>

        <div className="flex flex-col justify-between h-auto py-4">
          <div className="space-y-8">
            <p className="text-zinc-400 text-md md:text-lg leading-relaxed max-w-2xl">
              Welcome to{" "}
              <span className="text-primary font-semibold ">
                ANAM Trading Company
              </span>
              , your trusted partner for over 30 years in elevating living and
              working environments. Specializing in premium interior planning,
              architectural design, and high-end finishes, we ensure every space
              is crafted for both beauty and lasting durability.
            </p>
            <p className="text-zinc-400 text-md md:text-lg leading-relaxed max-w-2xl">
              At ANAM constructions, our focus is on YOU and what YOU want to
              achieve. we provide ourselves on forging strong, lasting
              relationship which help us to continue to thrive and develop.
            </p>

            <button className="bg-[#5a0f2f] hover:bg-[#4B0B22] text-white px-8 py-4 font-bold transition-all group">
              <Link to="/about" className="flex items-center gap-2">
                {" "}
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
