
const ImageSection = () => {
  return (
    <>
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
    </>
  );
};

export default ImageSection;
