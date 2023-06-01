const Seperator = () => {
  return (
    <div className="bg-secondary paddingY flex align-center justify-center">
      <div className="w-[150px] sm:w-[200px] relative md:w-[250px] aspect-square">
        <div className=" circle !opacity-50 w-full"></div>
        <div className="absolute circle w-[70%] border-[7px] sm:border-[8px] top-1/2 left-[-50%] translate-y-[-50%]"></div>
        <div className="absolute circle w-[70%] border-[7px] sm:border-[8px] top-1/2 right-[-50%] translate-y-[-50%]"></div>
      </div>
    </div>
  );
};

export default Seperator;
