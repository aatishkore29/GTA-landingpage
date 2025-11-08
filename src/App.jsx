import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute w-full p-10 z-10 top-0 left-0">
              <div className="flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-12 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-2 leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv w-full h-screen relative bg-emerald-500 overflow-hidden">
              <img
                src="/sky.png"
                alt=""
                className="sky w-full h-full object-cover absolute top-0 left-0"
              />
              <img
                src="/bg.png"
                alt=""
                className="bg w-full h-full object-cover absolute top-0 left-0"
              />
              <div className="text absolute top-20 left-1/2 -translate-x-1/2 text-white text-[8rem] flex flex-col gap-4">
                <h1 className="-ml-40 leading-none ">grand</h1>
                <h1 className="ml-20 leading-none ">theft</h1>
                <h1 className="-ml-40 leading-none ">auto</h1>
              </div>
              <img
                src="/last.png"
                alt=""
                className="char absolute bottom-0 left-1/2 -translate-x-[48%]"
              />
            </div>
            <div className="btmbar w-full px-10 py-13 bg-linear-to-t from-black to-transparent absolute bottom-0 text-white">
              <div className="flex items-center gap-4 ">
                <i class="ri-arrow-down-line text-4xl"></i>
                <h3 className="font-[sans-serif] text-xl">Scroll Down</h3>
              </div>
              <img
                src="/ps5_xbox.png"
                alt="ps5"
                className="top-1/2 left-1/2 absolute -translate-1/2 h-[60px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
