import { Search } from "lucide-react";
import { useState } from "react";
import Select from "react-select/base";

function Searchtable() {
  const [query, setQuery] = useState("");
  const [openRow, setOpenRow] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuIsOpen2, setMenuIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const rows = [
    {
      id: 1,
      trainno: "12505",
      trainname: "Cholan Express",
      from: "CBE",
      to: "TPJ",
      layover: "3.0",
      ETA: "10:40",
      STA: "11:00",
      dept: "12:00",
      delay: "-00:20",
      trackno: "4",
      priority: "1",
    },
    {
      id: 2,
      trainno: "12403",
      trainname: "Pandian Express",
      from: "MDU",
      to: "CBE",
      layover: "4.0",
      ETA: "13:55",
      STA: "13:56",
      delay: "-00:01",
      dept: "14:00",
      trackno: "2",
      priority: "2",
    },
    {
      id: 3,
      trainno: "16052",
      trainname: "Cheran Express",
      from: "CBE",
      to: "MAS",
      layover: "10.0",
      ETA: "18:50",
      STA: "16:50",
      dept: "17:00",
      delay: "+02:00",
      trackno: "3",
      priority: "1",
    },
    {
      id: 4,
      trainno: "12505",
      trainname: "Cholan Express",
      from: "CBE",
      to: "TPJ",
      layover: "3.0",
      ETA: "10:40",
      STA: "11:00",
      dept: "12:00",
      delay: "-00:20",
      trackno: "4",
      priority: "1",
    },
    {
      id: 5,
      trainno: "12403",
      trainname: "Pandian Express",
      from: "MDU",
      to: "CBE",
      layover: "4.0",
      ETA: "13:55",
      STA: "13:56",
      delay: "-00:01",
      dept: "14:00",
      trackno: "2",
      priority: "2",
    },
    {
      id: 6,
      trainno: "16052",
      trainname: "Cheran Express",
      from: "CBE",
      to: "MAS",
      layover: "10.0",
      ETA: "18:50",
      STA: "16:50",
      dept: "17:00",
      delay: "+02:00",
      trackno: "3",
      priority: "1",
    },
    {
      id: 1,
      trainno: "12505",
      trainname: "Cholan Express",
      from: "CBE",
      to: "TPJ",
      layover: "3.0",
      ETA: "10:40",
      STA: "11:00",
      dept: "12:00",
      delay: "-00:20",
      trackno: "4",
      priority: "1",
    },
    {
      id: 2,
      trainno: "12403",
      trainname: "Pandian Express",
      from: "MDU",
      to: "CBE",
      layover: "4.0",
      ETA: "13:55",
      STA: "13:56",
      delay: "-00:01",
      dept: "14:00",
      trackno: "2",
      priority: "2",
    },
    {
      id: 3,
      trainno: "16052",
      trainname: "Cheran Express",
      from: "CBE",
      to: "MAS",
      layover: "10.0",
      ETA: "18:50",
      STA: "16:50",
      dept: "17:00",
      delay: "+02:00",
      trackno: "3",
      priority: "1",
    },
    {
      id: 4,
      trainno: "12505",
      trainname: "Cholan Express",
      from: "CBE",
      to: "TPJ",
      layover: "3.0",
      ETA: "10:40",
      STA: "11:00",
      dept: "12:00",
      delay: "-00:20",
      trackno: "4",
      priority: "1",
    },
    {
      id: 5,
      trainno: "12403",
      trainname: "Pandian Express",
      from: "MDU",
      to: "CBE",
      layover: "4.0",
      ETA: "13:55",
      STA: "13:56",
      delay: "-00:01",
      dept: "14:00",
      trackno: "2",
      priority: "2",
    },
    {
      id: 6,
      trainno: "16052",
      trainname: "Cheran Express",
      from: "CBE",
      to: "MAS",
      layover: "10.0",
      ETA: "18:50",
      STA: "16:50",
      dept: "17:00",
      delay: "+02:00",
      trackno: "3",
      priority: "1",
    },
  ];

  const filteredRows = rows.filter((item) => {
    const searchTerm = query.toLowerCase();
    return (
      item.trainno.toLowerCase().includes(searchTerm) ||
      item.trainname.toLowerCase().includes(searchTerm) ||
      item.from.toLowerCase().includes(searchTerm) ||
      item.to.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="bg-gray-800 w-5/6 space-y-2 p-2 mt-4 text-center overflow-y-hidden h-max max-h-[50rem] rounded-md justify-self-end flex-1 cursor-pointer ">
      <div className=" border border-white/50 bg-gray-900 flex flex-row items-center justify-center gap-2 w-full rounded-md p-2">
      <Search className="text-white" size={16} />
      <input
        type="text"
        placeholder="Search Using Train No / Name / From / To"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-inherit outline-none text-white caret-white placeholder:text-white/80"
        />
      </div>
      <div className="overflow-y-auto max-h-96 h-max rounded-md border border-gray-50/50">
        <table className="text-white bg-gray-900 font-extralight  table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="w-1 whitespace-nowrap px-4 py-1">S.No</th>
              <th className="px-2 py-1">Train No</th>
              <th className="px-2 py-1">Train Name</th>
              <th className="px-2 py-1">From</th>
              <th className="px-2 py-1">To</th>
              <th className="px-2 py-1">Layover</th>
              <th className="px-2 py-1">ETA</th>
              <th className="px-2 py-1">STA</th>
              <th className="px-2 py-1">Dept Time</th>
              <th className="px-2 py-1">Delay</th>
              <th className="px-2 py-1">Track No</th>
              <th className="px-2 py-1">Priority</th>
              <th className="px-2 py-1">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.length > 0 ? (
              filteredRows.map((item) => (
                <tr key={item.id} className="hover:bg-gray-800 odd:bg-gray-950 even:bg-gray-900">
                  <td className="px-4 py-1">{item.id}</td>
                  <td className="px-2 py-1">{item.trainno}</td>
                  <td className="px-2 py-1">{item.trainname}</td>
                  <td className="px-2 py-1">{item.from}</td>
                  <td className="px-2 py-1">{item.to}</td>
                  <td className="px-2 py-1">{item.layover}</td>
                  <td className="px-2 py-1">{item.ETA}</td>
                  <td className="px-2 py-1">{item.STA}</td>
                  <td className="px-2 py-1">{item.dept}</td>
                  <td className="px-2 py-1">{item.delay}</td>
                  <td className="px-2 py-1">{item.trackno}</td>
                  <td className="px-2 py-1">{item.priority}</td>
                  <td className="px-2 py-1 relative">
                    <div className="flex gap-2">
                      <div className="flex border border-white/75 rounded-lg px-3 py-1 bg-gray-950 font-extralight w-max">
                        <p>Hold at SRGM</p>
                      </div>
                      <button
                        className="bg-gray-950 border border-white/75 text-white px-2 py-1 flex flex-row gap-2 rounded-lg"
                        onClick={() =>
                          setOpenRow(openRow === item.id ? null : item.id)
                        }
                      >
                        <p className="w-fit text-nowrap">More</p>⋮
                      </button>
                    </div>
                    {openRow === item.id && (
                      <div className="absolute right-0 mt-2 bg-black border border-gray-600 rounded-xl p-2 text-sm space-y-2 z-10">
                        <div className="flex items-center gap-2">
                          <p className="w-fit text-nowrap">Hold At</p>
                          <Select
                            options={[
                              { key: 1, value: "SRGM", label: "SRGM" },
                              { key: 2, value: "TPJ", label: "TPJ" },
                              { key: 3, value: "CBE", label: "CBE" },
                              { key: 4, value: "MAS", label: "MAS" },
                            ]}
                            menuIsOpen={menuIsOpen2}
                            onInputChange={(inputValue) => {}}
                            onChange={(selected) =>
                              setSelectedOption2(selected)
                            }
                            value={selectedOption2}
                            onMenuOpen={() => setMenuIsOpen2(true)}
                            onMenuClose={() => setMenuIsOpen2(false)}
                            className="w-full text-black rounded"
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <p>Change Platform</p>
                          {/* <p className="bg-gray-700 text-white px-2 rounded">
                            1 V
                          </p> */}
                          <Select
                            options={[
                              {
                                key: 1,
                                value: "1",
                                label: "1",
                              },
                              { key: 2, value: "2", label: "2" },
                              {
                                key: 3,
                                value: "3",
                                label: "3",
                              },
                              {
                                key: 4,
                                value: "4",
                                label: "4",
                              },
                            ]}
                            menuIsOpen={menuIsOpen}
                            onInputChange={
                              (inputValue) => {}
                              // setSelectedOption({
                              //   key: inputValue,
                              //   value: inputValue.toString(),
                              //   label: inputValue.toString(),
                              // })
                            }
                            onChange={(selected) => setSelectedOption(selected)}
                            value={selectedOption}
                            onMenuOpen={() => setMenuIsOpen(true)}
                            onMenuClose={() => setMenuIsOpen(false)}
                            className="w-20 text-black rounded"
                          />
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center py-4 text-gray-400">
                  No trains found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Searchtable;
