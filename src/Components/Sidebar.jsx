const ROUTE = [
  { km: 0, code: "KKDI" },
  { km: 11, code: "CTND" },
  { km: 20, code: "TYM" },
  { km: 36, code: "PDKT" },
  { km: 48, code: "VEL" },
  { km: 60, code: "KRUR" },
  { km: 76, code: "KRMG" },
  { km: 89, code: "TPJ" },
];

const Sidebar = () => {
  const currentStation = "TPJ";

  return (
    <div className="bg-black/30 text-white w-64 overflow-hidden rounded-lg m-3 font-extralight justify-center flex flex-1">
      <div className="w-full overflow-y-auto">
        <h1 className="text-center pt-2 font-bold">ROUTE</h1>
        <div className="flex h-fit py-2 flex-col">
          {ROUTE.map((station, index, array) => (
            <div key={station.code} className="flex flex-col items-center">
              <div className="px-2 grid grid-cols-3">
                <p className="p-2 text-center">{station.km} KM</p>
                <div className="relative p-2 w-full h-full mr-auto overflow-visible justify-items-center mt-1">
                  {station.code === currentStation && (
                    <div className=" bg-green-100 absolute animate-ping h-4 w-4 rounded-full"></div>
                  )}
                  <div
                    className={`${
                      station.code === currentStation
                        ? "bg-green-300"
                        : "bg-green-500"
                    } h-4 absolute w-4 rounded-full`}
                  />
                </div>
                <p className="p-2 text-center">{station.code}</p>
              </div>
              {index !== array.length - 1 && (
                <div className="m-2 h-3 w-0.5 border border-gray-200 bg-gray-200 rounded-lg" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
