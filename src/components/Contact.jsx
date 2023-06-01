/* eslint-disable react/prop-types */
import { instagram, linkedin, twitter, facebook } from "../assets";
import { nanoid } from "nanoid";

const Contact = ({ data }) => {
  return (
    <section className="relative bg-primary pb-24 pt-48 mt-64">
      <div className="wave absolute w-full h-[352px] bg-primary -top-[350px]"></div>
      <div className="max-w-[2000px] mx-auto paddingX ">
        <h1 className="mb-14 text-[45px] font-helvetica font-bold uppercase">
          Contact
        </h1>
        <a className="text-[22px] underline" href={`mailto:${data.email}`}>
          {data.email}
        </a>
        <div className="flex w-fit mt-14 items-center justify-center gap-5">
          {data.socialMedia.map((e) => {
            const n = e.platform.toLowerCase();
            return (
              <a
                className="bg-white overlayMe relative p-3 rounded-full"
                href={e.link}
                key={nanoid()}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[20px] h-[20px] "
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
          className="cursor-pointer scrollUp w-full flex items-center justify-center mt-16"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ion-icon name="arrow-up-circle-outline"></ion-icon>
        </div>
      </div>
    </section>
  );
};

export default Contact;
