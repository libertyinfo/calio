import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import leftarrow from "../assets/left-datearrow.svg";
import rightarrow from "../assets/right-datearrow.svg";
import noenteries from "../assets/no-entryimg.png";
import inputarrow from "../assets/input-arrow.svg";
import Typed from "typed.js";

function Noentries() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(5);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dates = Array.from({ length: 30 }, (_, i) => {
    return {
      day: i + 1,
      label: days[i % 7],
    };
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const el = useRef(null);

  useEffect(() => {
    const typing = new Typed(el.current, {
      strings: [
        "eat 2 roti with paneer sabji in lunch",
        "eat 3 and 1 glass milk",
        "eat 2 egg",
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typing.destroy();
    };
  }, []);

  return (
    <section className="bg-[#1E2230] h-screen">
      <Navbar />

      {/* DATE SCROLL STRIP */}
      <div className="w-full from-[#2A2F3F] to-[#232838] text-white flex items-center px-4 py-4">
        <button onClick={() => scroll("left")} className="mr-4">
          <img src={leftarrow} alt="" />
        </button>

        {/* DATE SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex flex-1 justify-between overflow-x-auto no-scrollbar"
        >
          {dates.map((item) => (
            <div
              key={item.day}
              onClick={() => setSelected(item.day)}
              className="flex flex-col items-center cursor-pointer min-w-[107px] lg:min-w-[132px] xl:min-w-[162px]"
            >
              <div
                className={`flex flex-col items-center w-[60px] h-[90px] rounded-full transition-all duration-300
                      ${
                        selected === item.day
                          ? "bg-[#FDDF65] text-black border-2 border-white"
                          : "text-gray-400"
                      }`}
              >
                <span className="text-[24px] font-semibold">{item.day}</span>
                <span className="text-[18px]">{item.label}</span>

                {selected === item.day && (
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="ml-4">
          <img src={rightarrow} alt="" />
        </button>
      </div>

      {/* No Enteries */}
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <img src={noenteries} alt="" className="mb-5" />

        <h2 className="text-[24px] font-medium text-white">No Entries</h2>

        <p className="text-[18px] text-[#FFFFFF99] mt-2">
          No log entries for this date.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 w-full px-6 pb-6 pt-4">
        <div className="mb-4">
          <p className="text-[#FFFFFF99] text-[16px]">Prompt suggestions</p>

          <div className="flex gap-[6px] text-[16px] text-white mt-2">
            <div>I</div>
            <div ref={el}></div>
          </div>
        </div>

        <div className="bg-[#787F9C] text-[18px] rounded-[20px] px-4 py-3 flex items-center justify-between">
          <input
            type="text"
            placeholder="Log your meal..."
            className="bg-transparent outline-none w-full text-white placeholder:text-white/70"
          />

          <img
            src={inputarrow}
            alt=""
            className="ml-3 w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Noentries;