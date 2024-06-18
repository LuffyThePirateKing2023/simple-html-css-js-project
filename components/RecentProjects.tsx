"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useState } from "react";
import MagicButton from "./MagicButton";

const RecentProjects = () => {

  const [view, setView] = useState(4);

  const showmoreItems = () => {
    if(view === 20 || view === projects.length){
      setView(4);
    }
    else{
      setView((prev) => prev + 16 );
    }
  }

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Simple projects in{" "}
        <span className="text-purple">HTML CSS JS</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">

        {projects.slice(0, view).map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="LuffyThePirateKing2023"
              href="https://github.com/LuffyThePirateKing2023/HTML-CSS-Js-projects"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a className="flex lg:text-xl md:text-xs text-sm text-purple"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div> 
        <div className="flex justify-center mt-4">
              <MagicButton
                title={view === 20 || view === projects.length ? "Show Less" : "Show All"}
                icon={<FaLocationArrow />}
                position="right"
                handleClick={showmoreItems}
                />
        </div>       
    </div>
  );
};

export default RecentProjects;
