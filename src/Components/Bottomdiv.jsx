function Bottomdiv() {
  const stationforms = [
    { name: "MS" },
    { name: "TBM" },
    { name: "CGL" },
    { name: "MLMR" },
    { name: "VM" },
    { name: "VRM" },
    { name: "ALU" },
    { name: "LLI" },
    { name: "SRGM" },
    { name: "GOC" },
    { name: "TPJ" },
    { name: "PDKT" },
    { name: "KKDI" },
  ];

  const arrivalTimes = [
    "15:40",
    "16:15",
    "16:50",
    "17:25",
    "18:00",
    "18:35",
    "19:10",
    "19:45",
    "20:20",
    "20:55",
    "21:30",
    "22:05",
    "22:40",
  ];

  const currentStation = "GOC";
  const currentIndex = stationforms.findIndex(
    (item) => item.name === currentStation
  );

  return (
    <div className="grid grid-cols-6 gap-2 justify-self-end w-5/6">
      <div className="bg-gray-950 flex flex-col col-span-4 w-full p-4 mt-2 rounded-md overflow-hidden">
        <div className="flex flex-col w-full overflow-x-auto">
          <p className="font-semibold text-xl mb-4">Upcoming Trains</p>
          <div className="px-8 pt-8 w-full">
            <div className="relative w-full">
              {/* First line */}
              <div className="border-t-2 p-10 border-white/70 w-full"></div>
              {/* Number Box positioned on first line */}
              <div className="hover:bg-sky-500 cursor-pointer absolute left-10 -top-3 bg-sky-600 text-white px-12 py-1 rounded-e-md rounded-tl-[36px] rounded-bl-md">
                12605
              </div>
              <div className="hover:bg-yellow-500 cursor-pointer absolute right-64 -top-3 bg-yellow-600 text-white px-12 py-1 rounded-e-md rounded-tl-[36px] rounded-bl-md">
                16505
              </div>
            </div>
          </div>

          {/* <div className="relative w-full ">
          <div className="border-t-2 border-white w-full  p-12  "></div>
          <div className="bg-gray-600 -top-4 text-white  px-12  py-1 rounded-md absolute left-32 rounded-e-md rounded-tl-[36px] rounded-bl-md w-max  ">
          22604
          </div>
        </div> */}

          {/* <div className="relative w-full ">
          <div className="border-t-2 border-white w-full  p-12     "></div>
          <div className="bg-gray-600 -top-4 text-white  px-12  py-1 rounded-md absolute left-96 rounded-e-md rounded-tl-[36px] rounded-bl-md w-max  ">
          22848
          </div>
          </div> */}
          <hr className="mt-4 mb-2 border-white/70"></hr>
          <p className="text-2xl text-white mb-2 font-semibold">
            12605 - MS KKDI Pallavan Express (-00:10)
          </p>

          {/* <div className="flex  cursor-pointer">
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-purple-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-red-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-red-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-red-800 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-red-500 h-8 w-8 mt-8 rounded-full "> </div>
          <hr className="mt-12 m-2    h-0.5  w-12 border-0 rounded bg-gray-800 " />
          <div className="bg-red-500 h-8 w-8 mt-8 rounded-full "> </div>
          </div>
          <div className="flex ">
          {stationforms.map(function (item) {
            return (
              <p className="text-black px-5 ">{item.name}</p>
              );
              })}
        </div> */}
          <div className="flex flex-row space-x-2 font-semibold w-full mr-2">
            {stationforms.map((item, index, array) => (
              <div key={index} className="flex flex-row space-x-2">
                <div className="flex flex-col cursor-pointer  items-center">
                  {/* <div
                  className={`${
                    currentStation === item.name
                    ? "bg-red-800"
                    : currentIndex < index
                    ? "bg-purple-800"
                    : "bg-gray-800"
                    } h-8 w-8 rounded-full `}
                    ></div> */}
                  <div className="h-8 w-8 rounded-full relative">
                    {item.name === currentStation && (
                      <div className=" bg-red-500 absolute animate-ping h-8 w-8 rounded-full"></div>
                    )}
                    <div
                      className={`${
                        currentStation === item.name
                          ? "bg-red-800 hover:bg-red-700"
                          : currentIndex < index
                          ? "bg-sky-400 hover:bg-sky-300"
                          : "bg-gray-800"
                      } h-8 w-8 rounded-full absolute`}
                    />
                  </div>
                  <p className="text-white mt-1 text-center">{item.name}</p>
                  <p className="text-white/70 mt-0.5 text-center text-sm">
                    {arrivalTimes[index]}
                  </p>
                </div>
                {index !== array.length - 1 && (
                  <hr className=" h-0.5 mt-4 w-10 mx-2 border-0 rounded bg-gray-200 " />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SuggestedActions />
    </div>
  );
}

function SuggestedActions() {
  return (
    <div className="grid grid-cols-1  col-span-2 bg-gray-950 rounded-md mt-2 text-white p-4 ">
      <h2 className="mb-4 col-span-1 font-bold text-lg">Suggested Actions </h2>
      <div className="border w-max bg-gray-500/20 border-white/50 flex flex-col gap-2 justify-between p-2 m-2 rounded-lg place-self-center">
        <p>12605 to Hold At SRGM for 5 mins</p>
        <p className="text-wrap text-sm text-gray-50/80">
          Holding at Srirangam for 5 mins reduces delay by 5 mins
        </p>
        <div className="flex flex-row gap-2 text-white">
          <button className="bg-green-600 px-6 py-1 hover:bg-green-500 rounded-md">
            ACCEPT
          </button>
          <button className="bg-red-600 px-6 py-1 hover:bg-red-500 rounded-md">
            DECLINE
          </button>
        </div>
      </div>
      <div className="border bg-gray-500/20 border-white/50 flex flex-col justify-between p-2 m-2 gap-2 rounded-lg w-max place-self-center">
        <p>12605 to Hold At SRGM for 5 mins</p>
        <p className="text-wrap text-sm text-gray-50/80">
          Holding at Srirangam for 5 mins reduces delay by 5 mins
        </p>
        <div className="flex flex-row gap-2 text-white ">
          <button className="bg-green-600 px-6 py-1 hover:bg-green-500 rounded-md">
            ACCEPT
          </button>
          <button className="bg-red-600 px-6 py-1 hover:bg-red-500 rounded-md">
            DECLINE
          </button>
        </div>
      </div>

      {/* 
        <div className="border border-white p-1 m-2  rounded-lg w-48">
          <p>12605 to Hold At SRGM for 5 mins</p>
          <p className="text-wrap">
            Holding ar Srirangam for 5 mins reduces delay by 5 mins
          </p>
          <div className="ml-2 text-white ">
            <button className="mr-2 bg-green-600 px-1 py-1 rounded-md">
              ACCEPT
            </button>
            <button className="mr-2 bg-red-600 px-1 py-1 rounded-md">
              DECLINE
            </button>
          </div>
        </div>

        <div className="border border-white p-1 m-2 rounded-lg w-48">
          <p>12605 to Hold At SRGM for 5 mins</p>
          <p className="text-wrap">
            Holding ar Srirangam for 5 mins reduces delay by 5 mins
          </p>
          <div className="ml-2 text-white ">
            <button className="mr-2 bg-green-600 px-1 py-1 rounded-md">
              ACCEPT
            </button>
            <button className="mr-2 bg-red-600 px-1 py-1 rounded-md">
              DECLINE
            </button>
          </div>
        </div>

        <div className="border border-white p-1 m-2 rounded-lg w-48">
          <p>12605 to Hold At SRGM for 5 mins</p>
          <p className="text-wrap">
            Holding ar Srirangam for 5 mins reduces delay by 5 mins
          </p>
          <div className="ml-2 text-white ">
            <button className="mr-2 bg-green-600 px-1 py-1 rounded-md">
              ACCEPT
            </button>
            <button className="mr-2 bg-red-600 px-1 py-1 rounded-md">
              DECLINE
            </button>
          </div>
        </div> */}
    </div>
  );
}

export default Bottomdiv;
