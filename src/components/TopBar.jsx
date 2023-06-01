/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TopBar = ({ place }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (place === "start") {
        setIsScrolled(window.scrollY > 1);
      } else {
        setIsScrolled(
          window.scrollY !==
            Math.max(
              window.pageYOffset,
              document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            )
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        place === "end" ? "!bg-secondary" : ""
      } h-20 md:h-44 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-secondary"
      }`}
    ></div>
  );
};

export default TopBar;
