
const Navbar = () => {
  return (
    <>
      <div className="navbar absolute w-full p-10 z-10 top-0 left-0">
        <div className="flex gap-7">
          <div className="lines flex flex-col gap-[5px]">
            <div className="line w-12 h-2 bg-white"></div>
            <div className="line w-8 h-2 bg-white"></div>
            <div className="line w-5 h-2 bg-white"></div>
          </div>
          <h3 className="text-4xl -mt-2 leading-none text-white">Rockstar</h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
