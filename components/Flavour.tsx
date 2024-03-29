"use client";
import { useState } from "react";
import { features } from "../constants";
import ModalVideo from "@/common/ModalVideo";

const Business = () => {
  const [mainImage, setMainImage] = useState("/images/vd1.jpg");
  const [video, setVideo] = useState("/vi1.mp4");
  const changeMainImage = (image: string, video: string) => {
    setMainImage(image);
    setVideo(video);
  };

  return (
    <>
      <section
        id="features"
        className="flex md:flex-row flex-col sm:py-16 py-6"
      >
        <div className="flex-1 flex justify-center items-centermd:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
          {features.map(({ icon, title, content }, index) => (
            <div
              key={index}
              className={`cursor-pointer flex flex-row p-6 rounded-[20px] ${
                index !== features.length - 1 ? "mb-6" : "mb-0"
              } bg-transparent bg-red-900 hover:bg-red-950`}
              onClick={() => changeMainImage(icon.videoThub,icon.video)}
            >
              <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center ">
                <img
                  src={icon.icons}
                  alt={`Thumbnail ${index}`}
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[20px] leading-[23.4px] mb-1">
                  {title}
                </h4>
                <p className="font-poppins font-normal text-white text-[14px] leading-[24px]">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-start flex-col pl-0 md:pl-10 py-20 md:py-0">
          <ModalVideo
            thumb={mainImage}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video={video}
            videoWidth={1000}
            videoHeight={1000}
          />
        </div>
      </section>
    </>
  );
};

export default Business;
