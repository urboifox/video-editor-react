const Seperator = () => {
  return (
    <div className="bg-secondary paddingY flex align-center justify-center">
      <div className="w-[100px] sm:w-[150px] relative md:w-[200px] aspect-square">
        <div className=" circle !opacity-50 w-full"></div>
        <div className="absolute circle w-[70%] border-[5px] sm:border-[6px] top-1/2 left-[-50%] translate-y-[-50%]"></div>
        <div className="absolute circle w-[70%] border-[5px] sm:border-[6px] top-1/2 right-[-50%] translate-y-[-50%]"></div>
      </div>
    </div>
  );
};

export default Seperator;
