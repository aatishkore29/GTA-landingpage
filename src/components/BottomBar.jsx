import "remixicon/fonts/remixicon.css";

const BottomBar = () => {
  return (
    <>
      <div className="btmbar w-full px-10 py-12 bg-linear-to-t from-black to-transparent absolute bottom-0 text-white">
        <div className="flex items-center gap-4 ">
          <i className="ri-arrow-down-line text-4xl"></i>
          <h3 className="font-[Russo_One] text-xl">Scroll Down</h3>
        </div>
        <img
          src="/ps5_xbox.png"
          alt="ps5"
          className="top-1/2 left-1/2 absolute -translate-1/2 h-[60px]"
        />
      </div>
    </>
  );
};

export default BottomBar;
