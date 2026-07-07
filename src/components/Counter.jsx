import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const sectionRef = useRef(null);

  const stats = [
    { value: "860+", label: "Customers served" },
    { value: "10+", label: "Years of Experience" },
    { value: "4.8/5", label: "Customer Satisfaction Score" },
    { value: "156+", label: "Completed Projects" },
  ];

  const getNumberAndSymbol = (value) => {
    // Matches the first number (including decimals) and the remaining string as symbol
    const number = parseFloat(value);
    const symbol = value.replace(number.toString(), "");
    return { number, symbol };
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animate the cards container entrance
      const cards = gsap.utils.toArray(".stat-card");

      cards.forEach((card) => {
        const numberElement = card.querySelector(".count-up");
        const { number, symbol } = getNumberAndSymbol(
          numberElement.getAttribute("data-target"),
        );

        // Target object for GSAP to animate
        const countObj = { val: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Starts when card is 85% from top of viewport
            toggleActions: "play none none none",
          },
        });

        // Entrance animation for the card itself
        tl.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        tl.to(
          countObj,
          {
            val: number,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => {
              const isDecimal = number % 1 !== 0;
              numberElement.innerText =
                (isDecimal
                  ? countObj.val.toFixed(1)
                  : Math.floor(countObj.val)) + symbol;
            },
          },
          "-=0.6",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden pb-10">
      <div className=" mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center bg-[#5a0f2f]/10 ">
          {stats.map((item, i) => (
            <div
              key={i}
              className="stat-card space-y-2  py-10 px-6 border-r border-gray-100 last:border-0"
            >
              <div
                className="count-up text-4xl md:text-5xl font-bold text-primary tracking-tight font-sans"
                data-target={item.value}
              >
                0
              </div>

              <div className="text-sm md:text-sm font-medium text-black uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
