import React from "react";
import { useSelector } from "react-redux";
import { officePic1, officePic2, virat } from "../../index";

function Blog2() {
  const themeColor = useSelector(state => state.color)

  return (
    <>
      <section className="px-[10%] max-[500px]:px-[5%] my-20">
        <div className="text-white flex gap-5 justify-between max-[1250px]:flex-col">
          <main className="w-[45%] flex flex-col gap-7 max-[1250px]:w-full">
            <h1 className="text-3xl font-semibold">
              How to quickly deploy a static website
            </h1>
            <p>
              Static websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even influence both
              web designers and developers influence both web designers and
              developers. Static websites are now used to bootstrap lots of
              websites and are becoming the basis for a variety of tools that
              even influence both web designers and developers influence both
              web designers and developers. Static websites are now used to
              bootstrap lots of websites and are becoming the basis for a
              variety of tools that even influence both web designers and
              developers influence both web designers and developers. Static
              websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even influence both
              web designers and developers influence both web designers and
              developers. Static websites are now used to bootstrap lots of
              websites and are becoming the basis for a variety of tools that
              even influence both web designers and developers influence both
              web designers and developers.
            </p>
            <div className=" flex justify-between">
              <span className="flex items-center gap-3">
                <div className="w-[2rem] h-[2rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={virat}
                    alt=""
                  />
                </div>
                <span className="font-bold">Jese Leos</span>
              </span>
              <span>14 days ago</span>
            </div>
          </main>

          <main className=" grid-cols-2 grid gap-3 justify-center items-center">
            <img
              style={{
                boxShadow: `0px 0px 7px ${themeColor ? themeColor : "white"}`,
              }}
              className="rounded-xl w-[18rem] max-[1250px]:w-full "
              src={officePic1}
              alt=""
            />
            <img
              style={{
                boxShadow: `0px 0px 7px ${themeColor ? themeColor : "white"}`,
              }}
              className="rounded-xl mt-14 w-[18rem] max-[1250px]:w-full "
              src={officePic2}
              alt=""
            />
          </main>
        </div>
      </section>
    </>
  );
}

export default Blog2;
