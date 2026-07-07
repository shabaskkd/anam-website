import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo4.png";
import logo5 from "../assets/images/logos/logo5.png";
import logo6 from "../assets/images/logos/logo6.png";
import logo7 from "../assets/images/logos/logo7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden relative py-6">
      <style>
        {`
          /* Left → Right */
          @keyframes marquee-left {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          /* Right → Left */
          @keyframes marquee-right {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .track {
            display: flex;
            width: 200%;
          }

          .wrapper-left {
            display: flex;
            animation: marquee-right 10s linear infinite;
          }

          .wrapper-right {
            display: flex;
            animation: marquee-left 10s linear infinite;
          }

          .logo-item {
            flex-shrink: 0;
            padding: 0 40px;
            opacity: 0.85;
            transition: opacity 0.3s ease;
          }

          .logo-item:hover {
            opacity: 1;
          }
        `}
      </style>

      <div className="track mt-10 pb-10">
        <div className="wrapper-left">
          {logos.map((logo, i) => (
            <div key={i} className="logo-item flex items-center justify-center">
              <img src={logo} width={90} alt={`logo-${i}`} />
            </div>
          ))}
        </div>

        <div className="wrapper-left" aria-hidden="true">
          {logos.map((logo, i) => (
            <div
              key={`dup1-${i}`}
              className="logo-item flex items-center justify-center"
            >
              <img src={logo} width={90} alt={`logo-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
