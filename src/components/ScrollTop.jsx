const ScrollTop = () => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <svg
        data-bbox="20 59.5 160 81.001"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="shape"
        className="w-[35px] aspect-square fill-lightBlue hover:fill-primary transition-all duration-200"
      >
        <g>
          <path d="M177.687 128.054L105.35 61.402a7.205 7.205 0 0 0-5.35-1.886 7.198 7.198 0 0 0-5.349 1.886l-72.338 66.652a7.165 7.165 0 0 0-.407 10.138 7.172 7.172 0 0 0 5.283 2.309c1.743 0 3.49-.629 4.872-1.902L100 75.999l67.939 62.598a7.197 7.197 0 0 0 10.155-.406 7.163 7.163 0 0 0-.407-10.137z"></path>
        </g>
      </svg>
    </div>
  );
};

export default ScrollTop;
