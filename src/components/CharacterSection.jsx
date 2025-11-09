
const CharacterSection = () => {
  return (
    <>
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="cntnr w-full h-[80%] flex text-white">
          <div className="left relative w-1/2 h-full">
            <img
              src="/man4.png"
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] rounded-2xl"
            />
          </div>
          <div className="right w-[30%]">
            <h1 className="text-8xl">Still running,</h1>
            <h1 className="text-7xl">Not Hunting</h1>
            <p className="text-xl font-[Russo_One] mt-10">
              Dive into the sun-soaked streets of Vice City and the gritty
              underworld of Leonida. Two rebellious souls. One high-stakes score
              gone wrong. Every moment counts.
            </p>
            <p className="text-xl font-[Russo_One] mt-4">
              Power, money, and survival — everything’s on the line in Vice
              City.
            </p>
            <p className="text-xl font-[Russo_One] mt-4">
              Gear up. Get ready. The streets are watching.
            </p>
            <button className="bg-yellow-500 px-10 py-5 rounded-xl text-black mt-5 text-4xl hover:scale-[1.1] transition duration-450">
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
    </>
  );
};

export default CharacterSection;
