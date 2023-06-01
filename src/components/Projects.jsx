import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Projects({ data }) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const videoContent = useRef();

  const toggleVideo = (Eldata) => {
    if (!showVideo) {
      setShowVideo(true);
      setVideoData(Eldata);
    } else {
      setShowVideo(false);
      setVideoData(null);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      videoContent.current.style.opacity = "1";
    }, 500);
  }, [videoData]);

  const swipe = (target) => {
    if (target === 1) {
      const targetDataId = videoData.id + 1;
      const targetData = data.videos.filter((e) => e.id === targetDataId)[0];
      setVideoData(targetData);
    } else {
      const targetDataId = videoData.id - 1;
      const targetData = data.videos.filter((e) => e.id === targetDataId)[0];
      setVideoData(targetData);
    }
  };
  return (
    <section className={`select-none bg-secondary paddingY paddingX`}>
      {showVideo ? (
        <article className="videoShower flex items-center justify-center paddingX fixed top-0 left-0 w-full h-[100vh] z-20 bg-[#191917ff]">
          <div
            className="items-center justify-center cursor-pointer fixed aspect-square top-[50px] w-[50px] right-[20px] z-50"
            onClick={() => toggleVideo(null)}
          >
            <div className="absolute w-full h-[1px] bg-primary top-[50%] left-0 rotate-45"></div>
            <div className="absolute w-full h-[1px] bg-primary top-[50%] left-0 -rotate-45"></div>
          </div>
          <div
            className="opacity-0 transition-all duration-500 flex items-center lg:flex-row flex-col"
            ref={videoContent}
          >
            <div className="relative lg:mr-20 mb-10 w-[100%] sm:w-[90%] lg:w-[70%] aspect-video">
              {videoData.id !== data.videos[0].id ? (
                <div
                  onClick={() => {
                    swipe(-1);
                  }}
                  className="hidden sm:block text-primary cursor-pointer absolute top-1/2 left-[-35px] translate-y-[-50%] aspect-square"
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
              ) : (
                ""
              )}
              {videoData.id < data.videos.length ? (
                <div
                  onClick={() => {
                    swipe(1);
                  }}
                  className="hidden sm:block text-primary cursor-pointer absolute top-1/2 right-[-35px] translate-y-[-50%] aspect-square"
                >
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
              ) : (
                ""
              )}
              {videoData.embeded ? (
                <iframe
                  className="w-full h-full"
                  src={videoData.video}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  preload="metadata"
                  controls
                  loop
                  controlsList="nodownload"
                  disablePictureInPicture
                  type="video/mp4"
                  src={videoData.video}
                  className="w-full h-full"
                  autoPlay
                ></video>
              )}
            </div>
            <div className="max-w-[90%] lg:max-w-[30%]">
              <h3 className="text-[20px] sm:text-[27px] font-helvetica text-white mb-3">
                {videoData.title}
              </h3>
              <p className="mb-5 text-[16px] text-white">
                {videoData.description}
              </p>
              <a
                target="_blank"
                className="text-[16px] text-white underline"
                href={videoData.link}
                rel="noreferrer"
              >
                {videoData.linkText}
              </a>
            </div>
          </div>
        </article>
      ) : (
        ""
      )}
      <div>
        <div className="max-w-[2000px] flex sm:justify-start justify-center mx-auto">
          <h2 className="z-[1] text-[30px] sm:text-[46px] w-fit circleBefore heading2 text-white mt-20 relative">
            {data.headline}
          </h2>
        </div>
        <div className="projects">
          {data.videos.map((e) => {
            return (
              <div
                className={`flex relative project-item group project-${e.id}`}
                key={e.id}
                onClick={() => {
                  toggleVideo(e);
                }}
              >
                <img className="object-cover" src={e.image} alt={e.title} />
                <div className="absolute bg-primary transition-all duration-300 group-hover:bg-opacity-100 bg-opacity-25 w-[45px] aspect-square rounded-full flex items-center justify-center z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="absolute w-full h-full top-0 left-0 bg-secondary z-[5] bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
