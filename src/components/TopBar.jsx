/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-20 bg-secondary md:h-44 transition-all duration-300 ${
        isScrolled ? "bg-white" : ""
      }`}
    ></div>
  );
};

export default TopBar;
