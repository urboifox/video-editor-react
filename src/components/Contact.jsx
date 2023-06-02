/* eslint-disable react/prop-types */
import { instagram, linkedin, twitter, facebook } from "../assets";
import { nanoid } from "nanoid";
import { Footer } from "./";

const Contact = ({ data }) => {
  return (
    <section className="relative  bg-primary pb-24 pt-48 mt-64">
      <div className="wave absolute w-full h-[352px] bg-primary -top-[350px]"></div>
      <div className="max-w-[1000px] mx-auto paddingX flex flex-col items-center sm:items-start">
        <h1 className="mb-14 text-[40px] font-helvetica font-bold uppercase">
          Contact
        </h1>
        <a className="text-[20px] underline" href={`mailto:${data.email}`}>
          {data.email}
        </a>
        <div className="flex w-fit mt-14 items-center justify-center gap-5">
          {data.socialMedia.map((e) => {
            const n = e.platform.toLowerCase();
            return (
              <a
                className="bg-white overlayMe relative p-2 rounded-full"
                href={e.link}
                key={nanoid()}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[16px] h-[16px] "
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
        <div
          className="cursor-pointer scrollUp w-full flex items-center justify-center mt-20 sm:mt-16"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ion-icon name="arrow-up-circle-outline"></ion-icon>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
