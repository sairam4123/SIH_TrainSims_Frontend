// function Bottomdiv(){

//     const station  = {
//         ["MS", "TBM", "CGL", "MLMR", "VM", "VRM", "ALU", "LLI", "SRGM", "GOC", "TPJ", "PDKT", "KKDI"]
//     };
//     return(

//           <div className="bg-purple-100 border-t m-5 fixed w-screen bottom-10 border-purple-300 flex justify-between items-center p-4">
//       {/* Left content */}

//       <div>
//         <h2 className="text-sm font-semibold text-gray-700">12605 - MS KKDI Pallavan Express (10 min Delay)</h2>
//         <div className="flex items-center space-x-4 mt-2">
//           {["MS", "TBM", "CGL", "MLMR", "VM", "VRM", "ALU", "LLI", "SRGM", "GOC", "TPJ", "PDKT", "KKDI"].map((station, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
//                 {station[0]}
//               </div>
//               <span className="text-xs text-gray-600 mt-1">{station}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right content (Reserved Space) */}
//       <div className="flex-1 flex justify-center items-center">
//         <p className="text-xl text-gray-700 font-semibold transform rotate-[-20deg]">
//           Reserved Space
//         </p>
//       </div>
//     </div>
//     )
// }export default Bottomdiv

function Bottomdiv() {
  const stationforms = [
    { name: "MS" },
    { name: "TBM" },
    { name: "CGl" },
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

  const currentStation = "GOC";
  const currentIndex = stationforms.findIndex(
    (item) => item.name === currentStation
  );

  return (
    <div className="flex-row flex justify-self-end w-5/6">
      <div className="bg-gray-950 p-12 w-2/3 h-1/2 m-2 rounded-md overflow-y-auto">
        <div className="relative w-full">
          {/* First line */}
          <div className="border-t-2 p-10  border-white w-full "></div>
          {/* Number Box positioned on first line */}
          <div className=" absolute left-10 -top-3 bg-sky-600 text-white px-12 py-1 rounded-e-md rounded-tl-[36px] rounded-bl-md">
            12605
          </div>
          <div className=" absolute right-64 -top-3 bg-yellow-600 text-white px-12 py-1 rounded-e-md rounded-tl-[36px] rounded-bl-md">
            16505
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

        <p className="text-2xl text-white mb-2 font-semibold">
          12605 - MS KKDI Pallavan Express (10 Mins Delay){" "}
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
        <div className="flex flex-row space-x-2">
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
                        ? "bg-red-800"
                        : currentIndex < index
                        ? "bg-sky-400"
                        : "bg-gray-800"
                    } h-8 w-8 rounded-full absolute`}
                  />
                </div>
                <p className="text-white mt-1 text-center">{item.name}</p>
              </div>
              {index !== array.length - 1 && (
                <hr className=" h-0.5 mt-4 w-10 mx-2 border-0 rounded bg-gray-200 " />
              )}
            </div>
          ))}
        </div>
      </div>
      <SuggestedActions />
    </div>
  );
}

function SuggestedActions() {
  return (
    <div className="grid grid-cols-1 justify-self-end bg-black w-1/3 rounded-md mt-2 text-white p-4 ">
      <h2 className="mb-4 col-span-1 font-bold text-lg">Suggested Actions </h2>
      <div className="border w-full bg-gray-500/20 border-white/50 flex flex-col gap-2 justify-between p-2 m-2 rounded-lg">
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
      <div className="border bg-gray-500/20 border-white/50 flex flex-col justify-between p-2 m-2 gap-2 rounded-lg w-full">
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
