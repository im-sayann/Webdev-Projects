import React from "react";
import { useSelector } from "react-redux";
import { IoIosVideocam } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { srk, virat } from "../../index";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ZoomInSection from "../ZoomInSection";

function Blog() {
  const location = useLocation();
  const themeColor = useSelector(state => state.color)
  const isSubPage =
    location.pathname.includes("/blog/blog1") ||
    location.pathname.includes("/blog/blog2"); // if these pages are active then don't show rest of the about content

  const blogInfo = [
    {
      icon: <IoIosVideocam />,
      type: "Tutorial",
      duration: "14 days ago",
      title: "How to quickly deploy a static website",
      description:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      profileLogo: srk,
      profileName: "Jese Leos",
      key: 1,
      blogLink: "/blog/blog1"
    },
    {
      icon: <MdArticle />,
      type: "Article",
      duration: "15 days ago",
      title: "Our first project with Astro",
      description:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      profileLogo: virat,
      profileName: "Bonnie Green",
      key: 2,
      blogLink: "/blog/blog2"
    },
  ];

  return (
    <>
      {!isSubPage && (
        <>
          <section className="px-[10%] my-20 text-white flex flex-col gap-5 items-center justify-center max-[500px]:px-[5%] ">
            <h1 className="text-4xl text-center font-bold">Our Blog</h1>
            <p className="text-xl text-center w-[70%] max-[500px]:w-full">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </section>

          <section className="px-[10%] my-20 max-[500px]:px-[5%] grid grid-cols-2 gap-x-3 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-[40px]">
            {blogInfo.map((item) => {
              return (
                <ZoomInSection key={item.key}>
                  <div 
                    style={{boxShadow: `inset 0px 0px 11px 0px ${themeColor? themeColor : "white"},
                       0px 15px 0px 0px ${themeColor? themeColor : "white"}`,
                        border: `2px solid ${themeColor? themeColor : "white"}`}}  
                    className="px-7 py-7 max-[380px]:p-[18px] flex flex-col gap-10 rounded-[35px] text-white  ">
                    <main className="flex justify-between items-center">
                      <div 
                        style={{backgroundColor: themeColor}}
                        className="flex items-center primaryColor rounded-lg px-[7px] py-[3px] gap-1 ">
                        <span className="text-[14px]">{item.icon}</span>
                        <span className="text-[12px]">{item.type}</span>
                      </div>
                      <div className="text-[12px]">{item.duration}</div>
                    </main>
                    <main className="flex flex-col gap-3">
                      <h1 className="text-2xl font-bold">{item.title}</h1>
                      <p>{item.description}</p>
                    </main>
                    <main className="flex justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-[2rem] h-[2rem] rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={item.profileLogo}
                            alt=""
                          />
                        </div>
                        <span className="font-semibold">
                          {item.profileName}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center secondTextColor cursor-pointer ">
                        <NavLink
                          className="flex items-center gap-2"
                          to={item.blogLink}
                        >
                          <span>Read More</span>
                          <FaArrowRight />
                        </NavLink>
                      </div>
                    </main>
                  </div>
                </ZoomInSection>
              );
            })}
          </section>
        </>
      )}
      <Outlet />
    </>
  );
}

export default Blog;
