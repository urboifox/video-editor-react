/* eslint-disable react/prop-types */
import { Button } from "./";
import { instagram, linkedin, twitter } from "../assets";
import { facebook } from "../assets";

const Hero = ({ data }) => {
  return (
    <div className="gridmeBig bg-primary">
      <div className="flex bg-blue-500">
        <img className="object-cover" src={data.image} alt="intro image" />
      </div>
      <div className="pt-20 md:pt-40 pb-10 md:pb-20 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-[46px] font-luluCleanBold tracking-widest">
          {`${data.headline.slice(0, data.headline.length - 1)}`}
          <span className="text-white">{`${data.headline.slice(-1)}`}</span>
        </h1>
        <p className=" mb-10 max-w-[320px] leading-6 tracking-wider text-center font-latoLight font-light">
          {data.paragraph}
        </p>
        <Button data={data.contactButton} />
        <div className="flex items-center justify-center gap-5">
          {data.socialMedia.map((e) => {
            const n = e.platform.toLowerCase();
            return (
              <a href={e.link} key={e.id} target="_blank" rel="noreferrer">
                <img
                  className="w-[25px] h-[25px]"
                  src={
                    n === "instagram"
                      ? instagram
                      : n === "linkedin"
                      ? linkedin
                      : n === "twitter"
                      ? twitter
                      : facebook
                  }
                  alt="image"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
