/* eslint-disable react/prop-types */

function Button({ data }) {
  const position = 4400;
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo(0, position);
        }}
        className="text-[15px] font-light tracking-wide mb-10 rounded-[20px] border-white border-[4px] bg-primary transition-all duration-300 px-14 py-2 hover:bg-secondary hover:text-white hover:border-secondary"
      >
        {data.text}
      </button>
    </>
  );
}

export default Button;
