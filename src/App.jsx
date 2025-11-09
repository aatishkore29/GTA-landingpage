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

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: "-1",
      ease: "expo.easeInOut",
    });
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-0.7",
      ease: "expo.easeInOut",
    });
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-0.7",
      ease: "expo.easeInOut",
    });
    gsap.to(".char", {
      rotate: 0,
      scale: 1.1,
      bottom: "0",
      x: "-50%",
      duration: 2,
      delay: "-0.7",
      ease: "expo.easeInOut",
    });
    gsap.to(".text", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-0.7",
      ease: "expo.easeInOut",
    });

    const main = document.querySelector(".main");
    if (main) {
      main.addEventListener("mousemove", (e) => {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
        gsap.to(".main .text", {
          x: `${xMove * 0.4}%`,
        });
        gsap.to(".sky", {
          x: xMove,
        });
        gsap.to(".bg", {
          x: xMove * 1.7,
        });
      });
    }
  }, [showContent]);
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
        <div className="main w-full rotate-[-5deg] scale-[1.5]">
          <div className="landing w-full h-screen bg-black overflow-hidden relative">
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
            <div className="imagesdiv w-full h-screen relative overflow-hidden">
              <img
                src="/sky.png"
                alt=""
                className="sky w-full h-full object-cover absolute top-0 left-0 scale-[1.5] rotate-[-20deg]"
              />
              <img
                src="/bg.png"
                alt=""
                className="bg w-full h-full object-cover absolute top-0 left-0 scale-[1.7] rotate-2"
              />
              <div className="text absolute top-20 left-1/2 -translate-x-1/2 text-white text-[8rem] flex flex-col gap-4 rotate-[-10deg] scale-[1.3]">
                <h1 className="-ml-40 leading-none ">grand</h1>
                <h1 className="ml-40 leading-none ">theft</h1>
                <h1 className="-ml-40 leading-none ">auto</h1>
              </div>
              <img
                src="/girl10.png"
                alt=""
                className="char absolute bottom-[150%] left-1/2 -translate-x-[48%] scale-[4] rotate-15"
              />
            </div>
            <div className="btmbar w-full px-10 py-12 bg-linear-to-t from-black to-transparent absolute bottom-0 text-white">
              <div className="flex items-center gap-4 ">
                <i className="ri-arrow-down-line text-4xl"></i>
                <h3 className="font-[sans-serif] text-xl">Scroll Down</h3>
              </div>
              <img
                src="/ps5_xbox.png"
                alt="ps5"
                className="top-1/2 left-1/2 absolute -translate-1/2 h-[60px]"
              />
            </div>
          </div>
          <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="cntnr w-full h-[80%] flex text-white">
              <div className="left relative w-1/2 h-full">
                <img
                  src="/man4.png"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] rounded-2xl"
                />
              </div>
              <div className="right w-[30%] py-10">
                <h1 className="text-8xl">Still running,</h1>
                <h1 className="text-7xl">Not Hunting</h1>
                <p className="text-xl font-[Helvetica_Now_Display] mt-10">
                  Dive into the sun-soaked streets of Vice City and the gritty
                  underworld of Leonida. Two rebellious souls. One high-stakes
                  score gone wrong. Every moment counts.
                </p>
                <p className="text-xl font-[Helvetica_Now_Display] mt-4">
                  Gear up. Get ready. The streets are watching.
                </p>
                <button className="bg-yellow-500 px-10 py-5 rounded-xl text-black mt-10 text-4xl hover:scale-[1.1] transition duration-450">
                  <a
                    href="https://www.rockstargames.com/VI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
