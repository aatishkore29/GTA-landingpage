import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoaderMask from "./components/LoaderMask";
import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import BottomBar from "./components/BottomBar";
import CharacterSection from "./components/CharacterSection";

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
      onComplete: () => {
        // document.querySelector(".svg").remove();
        setShowContent(true);
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
      scale: 1.2,
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
      {!showContent && <LoaderMask />}
      {showContent && (
        <div className="main w-full rotate-[-5deg] scale-[1.5]">
          <div className="landing w-full h-screen bg-black overflow-hidden relative">
            <Navbar />
            <ImageSection />
            <BottomBar />
          </div>
          <CharacterSection />
        </div>
      )}
    </>
  );
};

export default App;
