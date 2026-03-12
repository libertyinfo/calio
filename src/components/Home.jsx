import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import leftarrow from "../assets/left-datearrow.svg";
import rightarrow from "../assets/right-datearrow.svg";
import dropdownarrow from "../assets/dropdown-arrow.svg";
import inputarrow from "../assets/input-arrow.svg";
import ReactApexChart from "react-apexcharts";
import noenteries from "../assets/no-entryimg.png";
import Typed from "typed.js";

function Home() {
  const scrollRef = useRef(null);
  const el = useRef(null);
  const [showError, setShowError] = React.useState(false);
  const datesWithData = [4, 5, 9, 12];

  const handleError = () => {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  // load saved page from localStorage
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("selectedPage");
    return saved ? Number(saved) : 5;
  });

  const [openIndex, setOpenIndex] = useState(1);

  // save page when changed
  useEffect(() => {
    localStorage.setItem("selectedPage", selected);
  }, [selected]);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dates = Array.from({ length: 30 }, (_, i) => {
    return {
      day: i + 1,
      label: days[i % 7],
    };
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const item = scrollRef.current.querySelector("div");
      const itemWidth = item ? item.offsetWidth : 150;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  const [state, setState] = React.useState({
    series: [980, 1500, 870, 550],
    options: {
      chart: {
        type: "donut",
      },

      tooltip: {
        theme: "light",
        style: {
          color: "#000",
        },
      },

      colors: ["#C8A0FF", "#FF9B61", "#B6F36B", "#94DDFB"],

      labels: [],

      legend: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },

      responsive: [
        {
          breakpoint: 1480,
          options: {
            chart: {
              height: 260,
            },
          },
        },
        {
          breakpoint: 1280,
          options: {
            chart: {
              height: 260,
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "ate a healthy breakfast",
        "went for a run",
        "had a light dinner",
      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [selected]);

  return (
    <section className="bg-[#1E2230] h-screen text-white flex flex-col overflow-hidden">
      <Navbar />

      {/* DATE SCROLL STRIP */}
      <div className="mx-6 my-5">
        <div className="w-full bg-[#2d3142] text-white flex items-center px-2 py-2 rounded-2xl">
          {/* LEFT ARROW */}
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
                  className={`flex flex-col items-center justify-center w-[60px] xl:h-[80px] lg:h-[80px] md:h-[75px] rounded-full transition-all duration-300
        ${
          selected === item.day
            ? "bg-[#FDDF65] text-black border-2 border-white"
            : "text-gray-400"
        }`}
                >
                  <span className="xl:text-[24px] lg:text-[20px] font-semibold">
                    {item.day}
                  </span>

                  <span className="xl:text-[18px] lg:text-[16px]">
                    {item.label}
                  </span>

                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      selected === item.day
                        ? "bg-black"
                        : datesWithData.includes(item.day)
                          ? "bg-white"
                          : "bg-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button onClick={() => scroll("right")} className="ml-4">
            <img src={rightarrow} alt="" />
          </button>
        </div>
      </div>

      {/* MAIN AREA */}
      {datesWithData.includes(selected) && (
        <div className="flex flex-1 px-6 pb-6 gap-6 overflow-hidden">
          <div className="flex-1 overflow-y-auto scrollbar-hide xl:pr-4 lg:pr-3">
            <div className="mb-[80px]">
              <div className="border-2 border-[#343643] rounded-2xl p-6 mb-6 text-white ">
                {/* Header */}
                <div
                  onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h2 className="text-[22px] font-medium">
                    Paneer sabji with roti
                  </h2>

                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === 1 ? "rotate-180" : ""
                    }`}
                  >
                    <img src={dropdownarrow} alt="" />
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === 1
                      ? "max-h-[1000px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* ================= Paneer Sabji ================= */}
                  <div className="bg-[#323645] rounded-xl lg:p-5 p-3.5 mb-6">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-medium text-[18px]">Paneer sabji</h3>
                      <span className="text-[#FFFFFF] text-[18px]">
                        Cal: 5700
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Carbs</span>
                        <span>1500.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Protein</span>
                        <span>430.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fats</span>
                        <span>300.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fiber</span>
                        <span>435.0g</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-[#FFFFFF33] my-5"></div>

                    <div className="flex justify-between mb-4 ">
                      <h3 className="font-medium text-[18px]">Roti 3 pieces</h3>
                      <span className="text-[#FFFFFF] text-[18px]">
                        Cal: 2700
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Carbs</span>
                        <span>3500.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Protein</span>
                        <span>550.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fats</span>
                        <span>300.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fiber</span>
                        <span>435.0g</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-[#FFFFFF33] my-5"></div>

                    {/* ================= Total ================= */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-[18px]">Total</h3>
                      <span className="text-[18px]">Cal: 8400</span>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                      <div className="bg-[#FF9B61] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">5000.0 g</div>
                        <div className="font-medium text-sm mt-1">Carb</div>
                      </div>

                      <div className="bg-[#C8A0FF] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">980.0 g</div>
                        <div className="font-medium text-sm mt-1">Protein</div>
                      </div>

                      <div className="bg-[#94DDFB] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">550.0 g</div>
                        <div className="font-medium text-sm mt-1">Fats</div>
                      </div>

                      <div className="bg-[#B6F36B] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">870.0 g</div>
                        <div className="font-medium text-sm mt-1">Fiber</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= Total Summary (Show Only When Closed) ================= */}
                {openIndex !== 1 && (
                  <div className="bg-[#323645] rounded-xl p-5 mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-[18px]">Total</h3>
                      <span className="text-[18px]">Cal: 8400</span>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                      <div className="bg-[#FF9B61] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">5000.0 g</div>
                        <div className="font-medium text-sm mt-1">Carb</div>
                      </div>

                      <div className="bg-[#C8A0FF] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">980.0 g</div>
                        <div className="font-medium text-sm mt-1">Protein</div>
                      </div>

                      <div className="bg-[#94DDFB] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">550.0 g</div>
                        <div className="font-medium text-sm mt-1">Fats</div>
                      </div>

                      <div className="bg-[#B6F36B] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">870.0 g</div>
                        <div className="font-medium text-sm mt-1">Fiber</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-2 border-[#343643] rounded-2xl p-6 mb-6 text-white">
                {/* Header */}
                <div
                  onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h2 className="text-[22px] font-medium">
                    Paneer sabji with roti
                  </h2>

                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === 2 ? "rotate-180" : ""
                    }`}
                  >
                    <img src={dropdownarrow} alt="" />
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === 2
                      ? "max-h-[1000px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* ================= Paneer Sabji ================= */}
                  <div className="bg-[#323645] rounded-xl lg:p-5 p-3.5 mb-6">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-medium text-[18px]">Paneer sabji</h3>
                      <span className="text-[#FFFFFF] text-[18px]">
                        Cal: 5700
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Carbs</span>
                        <span>1500.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Protein</span>
                        <span>430.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fats</span>
                        <span>300.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fiber</span>
                        <span>435.0g</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-[#FFFFFF33] my-5"></div>

                    <div className="flex justify-between mb-4 ">
                      <h3 className="font-medium text-[18px]">Roti 3 pieces</h3>
                      <span className="text-[#FFFFFF] text-[18px]">
                        Cal: 2700
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Carbs</span>
                        <span>3500.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Protein</span>
                        <span>550.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fats</span>
                        <span>300.0g</span>
                      </div>

                      <div className="border border-dashed border-[#FFFFFF1A] rounded-lg p-3 flex justify-between">
                        <span>Fiber</span>
                        <span>435.0g</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-[#FFFFFF33] my-5"></div>

                    {/* ================= Total ================= */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-[18px]">Total</h3>
                      <span className="text-[18px]">Cal: 8400</span>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                      <div className="bg-[#FF9B61] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">5000.0 g</div>
                        <div className="font-medium text-sm mt-1">Carb</div>
                      </div>

                      <div className="bg-[#C8A0FF] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">980.0 g</div>
                        <div className="font-medium text-sm mt-1">Protein</div>
                      </div>

                      <div className="bg-[#94DDFB] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">550.0 g</div>
                        <div className="font-medium text-sm mt-1">Fats</div>
                      </div>

                      <div className="bg-[#B6F36B] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium text-[18px]">870.0 g</div>
                        <div className="font-medium text-sm mt-1">Fiber</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= Total Summary (Show Only When Closed) ================= */}
                {openIndex !== 2 && (
                  <div className="bg-[#323645] rounded-xl p-5 mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-[18px]">Total</h3>
                      <span className="text-[18px]">Cal: 8400</span>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                      <div className="bg-[#FF9B61] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">5000.0 g</div>
                        <div className="font-medium text-sm mt-1">Carb</div>
                      </div>

                      <div className="bg-[#C8A0FF] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">980.0 g</div>
                        <div className="font-medium text-sm mt-1">Protein</div>
                      </div>

                      <div className="bg-[#94DDFB] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">550.0 g</div>
                        <div className="font-medium text-sm mt-1">Fats</div>
                      </div>

                      <div className="bg-[#B6F36B] text-[#222531] rounded-xl p-2 text-center">
                        <div className="font-medium">870.0 g</div>
                        <div className="font-medium text-sm mt-1">Fiber</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* BOTTOM INPUT */}
            <div className="xl:py-5 lg:py-3 md:py-2 fixed bottom-0 bg-[#1E2230]  xl:w-[calc(100%-580px)] lg:w-[calc(100%-530px)] md:w-[calc(100%-400px)]">
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
                  onClick={handleError}
                />
              </div>
              {/* error message */}
              {showError && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-4">
                  <div className="bg-red-500 text-white text-sm px-5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-xs">⚠</span>
                    <span>Something went wrong. Please try again</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="xl:w-[500px] lg:w-[450px] md:w-[335px] bg-[#323645] rounded-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-[#FDDF65] 2xl:text-[22px] text-[20px] text-black px-4 py-5 font-medium">
              Today's Total
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto scroll-smooth custom-scroll  content-center  ">
              <div className="w-full">
                <div id="chart" className="flex justify-center mt-6">
                  <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="donut"
                    width="100%"
                    height={300}
                  />
                </div>

                <div>
                  <h3 className="2xl:text-[34px] xl:text-[32px] lg:text-[30px] md:text-[28px] text-center font-bold 2xl:mt-4 mt-3">
                    Cal: 8400
                  </h3>

                  <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 w-full p-5 2xl:mt-6 mt-4">
                    <div className="bg-[#FF9B61] text-black rounded-xl 2xl:p-4 p-3 text-center">
                      <div className="font-medium 2xl:text-[22px] text-[20px]">
                        5000.0 g
                      </div>
                      <div className="font-medium text-[16px] mt-2">Carb</div>
                    </div>

                    <div className="bg-[#C8A0FF] text-black rounded-xl 2xl:p-4 p-3 text-center">
                      <div className="font-medium 2xl:text-[22px] text-[20px]">
                        980.0 g
                      </div>
                      <div className="font-medium text-[16px] mt-2">
                        Protein
                      </div>
                    </div>

                    <div className="bg-[#94DDFB] text-black rounded-xl 2xl:p-4 p-3 text-center">
                      <div className="font-medium 2xl:text-[22px] text-[20px]">
                        550.0 g
                      </div>
                      <div className="font-medium text-[16px] mt-2">Fats</div>
                    </div>

                    <div className="bg-[#B6F36B] text-black rounded-xl 2xl:p-4 p-3 text-center">
                      <div className="font-medium 2xl:text-[22px] text-[20px]">
                        870.0 g
                      </div>
                      <div className="font-medium text-[16px] mt-2">Fiber</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Enteries */}
      {!datesWithData.includes(selected) && (
        <>
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
        </>
      )}

    </section>
  );
}

export default Home;