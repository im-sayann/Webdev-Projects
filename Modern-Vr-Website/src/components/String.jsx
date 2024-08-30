import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function String() {
  useGSAP(() => {
    var path = "M 10 100 Q 500 100 990 100";

    var finalPath = "M 10 100 Q 500 100 990 100";

    let string = document.querySelector("#string");

    string.addEventListener("mousemove", (dets) => {
      path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

      gsap.to("#stringSvg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out",
      });
    });

    string.addEventListener("mouseleave", () => {
      gsap.to("#stringSvg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1.2,0.2)",
      });
    });
  });

  return (
    <section id="string" className="w-full h-[200px] max-[1080px]:hidden">
      <svg id="stringSvg" width="1000" height="200">
        <path
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </section>
  );
}

export default String;
