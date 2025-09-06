// // import { useState } from "react";

// // function Table() {
// //   const [showdetails, setshowdetails] = useState(false);

// //   const rows = [
// //     {
// //       id: 1,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 2,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 3,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 4,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 1,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 2,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },

// //     {
// //       id: 4,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 1,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 2,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 3,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //     {
// //       id: 4,
// //       trainno: "123",
// //       trainname: "cholas",
// //       from: "CBE",
// //       to: "TPJ",
// //       layover: "343",
// //       ETA: "fdi",
// //       STA: "fkjgn",
// //       dept: "12:00",
// //       tarckno: "4",
// //       priority: "1",
// //       actions: "4",
// //     },
// //   ];

// //   return (
// //     <div className="bg-gray-400 w-3/4 justify-self-end">
// //       <input
// //         type="text"
// //         placeholder=" 🔎 Search Using Trn No "
// //         className="px-96 m-2 p-4"
// //       />

// //       <table className="text-white bg-black font-extralight table-auto border-collapse w-full">
// //         <thead>
// //           <tr>
// //             <th className="w-1 whitespace-nowrap border px-4 py-1">S.No</th>
// //             <th className="border px-2 py-1">Train No</th>
// //             <th className="border px-2 py-1">Train Name</th>
// //             <th className="border px-2 py-1">From</th>
// //             <th className="border px-2 py-1">To</th>
// //             <th className="border px-2 py-1">Layover</th>
// //             <th className="border px-2 py-1">ETA</th>
// //             <th className="border px-2 py-1">STA</th>
// //             <th className="border px-2 py-1">Dept Time</th>
// //             <th className="border px-2 py-1">Track No</th>
// //             <th className="border px-2 py-1">Priority</th>
// //             <th className="border px-2 py-1">Actions</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {rows.map((item) => (
// //             <tr key={item.id}>
// //               <td className=" border-x w-1 whitespace-nowrap  px-4 py-1">
// //                 {item.id}
// //               </td>
// //               <td className="border-x px-2 py-1">{item.trainno}</td>
// //               <td className="border-x px-2 py-1">{item.trainname}</td>
// //               <td className="border-x px-2 py-1">{item.from}</td>
// //               <td className="border-x px-2 py-1">{item.to}</td>
// //               <td className="border-x px-2 py-1">{item.layover}</td>
// //               <td className="border-x px-2 py-1">{item.ETA}</td>
// //               <td className="border-x px-2 py-1">{item.STA}</td>
// //               <td className="border-x px-2 py-1">{item.dept}</td>
// //               <td className="border-x px-2 py-1">{item.tarckno}</td>
// //               <td className="border-x px-2 py-1">{item.priority}</td>
// //               <td className="border-x px-2 py-1">
// //                 <div className="flex items-center gap-2">
// //                   <div className="flex border rounded-3xl px-3 py-1 bg-gray-700 font-extralight w-max">
// //                     <p>hold at SRGM for 5 mins</p>
// //                   </div>
// //                   <button
// //                     onClick={() => setshowdetails(!showdetails)}
// //                     className="bg-gray-700 w-max px-3 py-1 border rounded-3xl"
// //                   >
// //                     :
// //                   </button>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //           {showdetails && (
// //             <div className="bg-black absolute top-20 right-0 mt-2 w-max rounded-xl p-2 border text-white space-y-2">
// //               <div className="flex items-center gap-2">
// //                 <p>Hold At</p>
// //                 <p className="bg-gray-700 text-white px-2 rounded">SRGM V</p>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <p>Change Platform</p>
// //                 <p className="bg-gray-700 text-white px-2 rounded">1 V</p>
// //               </div>
// //             </div>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default Table;

import { useState } from "react";

function Searchtable() {
  const [query, setQuery] = useState("");
  const [openRow, setOpenRow] = useState(null);

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
    <div className="bg-gray-800 w-5/6 space-y-2 p-2 m-2 text-center overflow-y-hidden max-h-[32rem] rounded-md justify-self-end flex-1 cursor-pointer ">
      <input
        type="text"
        placeholder="Search Using Train No / Name / From / To"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-4 border bg-black/50 w-full text-black placeholder:text-white/80 p-2 rounded-xl"
      />
      <div className="overflow-y-auto max-h-60 rounded-md border border-gray-50">
        <table className="text-white bg-gray-900 font-extralight overflow-y-auto  table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="w-1 whitespace-nowrap px-4 py-1">S.No</th>
              <th className=" px-2 py-1">Train No</th>
              <th className=" px-2 py-1">Train Name</th>
              <th className=" px-2 py-1">From</th>
              <th className=" px-2 py-1">To</th>
              <th className=" px-2 py-1">Layover</th>
              <th className=" px-2 py-1">ETA</th>
              <th className=" px-2 py-1">STA</th>
              <th className=" px-2 py-1">Dept Time</th>
              <th className=" px-2 py-1">Delay</th>
              <th className=" px-2 py-1">Track No</th>
              <th className=" px-2 py-1">Priority</th>
              <th className=" px-2 py-1">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.length > 0 ? (
              filteredRows.map((item) => (
                <tr key={item.id} className="hover:bg-gray-700 odd:bg-gray-950">
                  <td className=" px-4 py-1">{item.id}</td>
                  <td className=" px-2 py-1">{item.trainno}</td>
                  <td className=" px-2 py-1">{item.trainname}</td>
                  <td className=" px-2 py-1">{item.from}</td>
                  <td className=" px-2 py-1">{item.to}</td>
                  <td className=" px-2 py-1">{item.layover}</td>
                  <td className=" px-2 py-1">{item.ETA}</td>
                  <td className=" px-2 py-1">{item.STA}</td>
                  <td className=" px-2 py-1">{item.dept}</td>
                  <td className=" px-2 py-1">{item.delay}</td>
                  <td className=" px-2 py-1">{item.trackno}</td>
                  <td className=" px-2 py-1">{item.priority}</td>
                  <td className=" px-2 py-1 relative">
                    <div className="flex gap-2">
                      <div className="flex border rounded-3xl px-3 py-1 bg-gray-700 font-extralight w-max">
                        <p>Hold at SRGM</p>
                      </div>
                      <button
                        className="bg-gray-700 text-white px-2 py-1 rounded"
                        onClick={() =>
                          setOpenRow(openRow === item.id ? null : item.id)
                        }
                      >
                        ⋮
                      </button>
                    </div>
                    {openRow === item.id && (
                      <div className="absolute right-0 mt-2 bg-black border border-gray-600 rounded-xl p-2 text-sm space-y-2 z-10">
                        <div className="flex items-center gap-2">
                          <p>Hold At</p>
                          <p className="bg-gray-700 text-white px-2 rounded">
                            SRGM V
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <p>Change Platform</p>
                          <p className="bg-gray-700 text-white px-2 rounded">
                            1 V
                          </p>
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

// import { useState } from "react";

// function Searchtable() {
//   const [query, setQuery] = useState("");
//   const [openRow, setOpenRow] = useState(null);

//   const rows = [
//     { id: 1, trainno: "123", trainname: "cholas", from: "CBE", to: "TPJ", layover: "343", ETA: "fdi", STA: "fkjgn", dept: "12:00", trackno: "4", priority: "1" },
//     { id: 2, trainno: "456", trainname: "pandian", from: "MDU", to: "CBE", layover: "120", ETA: "abc", STA: "def", dept: "14:00", trackno: "2", priority: "2" },
//     { id: 3, trainno: "789", trainname: "cheran", from: "CBE", to: "MAS", layover: "200", ETA: "ghi", STA: "jkl", dept: "16:00", trackno: "3", priority: "1" },
//     { id: 4, trainno: "321", trainname: "express", from: "TPJ", to: "MAS", layover: "150", ETA: "mno", STA: "pqr", dept: "18:00", trackno: "1", priority: "3" },
//     { id: 5, trainno: "654", trainname: "superfast", from: "MAS", to: "CBE", layover: "180", ETA: "stu", STA: "vwx", dept: "20:00", trackno: "2", priority: "1" },
//     { id: 6, trainno: "987", trainname: "local", from: "MDU", to: "TPJ", layover: "100", ETA: "yz", STA: "abc", dept: "22:00", trackno: "5", priority: "2" }
//   ];

//   const filteredRows = rows.filter((item) => {
//     const searchTerm = query.toLowerCase();
//     return (
//       item.trainno.toLowerCase().includes(searchTerm) ||
//       item.trainname.toLowerCase().includes(searchTerm) ||
//       item.from.toLowerCase().includes(searchTerm) ||
//       item.to.toLowerCase().includes(searchTerm)
//     );
//   });

//   return (
//     <div className="bg-gray-400 w-3/4 h-1/2 justify-self-end cursor-pointer p-2">
//       <input
//         type="text"
//         placeholder=" 🔎 Search Using Train No / Name / From / To "
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="px-6 m-2 p-2 text-black w-full"
//       />

//       <div className="overflow-y-auto max-h-48"> {/* 👈 restricts to ~3 rows */}
//        <table className="text-white bg-black font-extralight table-fixed border-collapse w-full text-sm">
//   <thead>
//     <tr>
//       <th className="border   px-6">S.No</th>
//       <th className="border px-2 py-1">Train No</th>
//       <th className="border px-2 py-1">Train Name</th>
//       <th className="border px-2 py-1">From</th>
//       <th className="border px-2 py-1">To</th>
//       <th className="border px-2 py-1">Layover</th>
//       <th className="border px-2 py-1">ETA</th>
//       <th className="border px-2 py-1">STA</th>
//       <th className="border px-2 py-1">Dept Time</th>
//       <th className="border px-2 py-1">Track No</th>
//       <th className="border px-2 py-1">Priority</th>
//       <th className="border px-2 py-1">Actions</th>
//     </tr>
//   </thead>

//   <tbody>
//     {filteredRows.map((item) => (
//       <tr key={item.id} className="text-xs"> {/* 👈 smaller font */}
//         <td className="border px-2 py-0.5">{item.id}</td>
//         <td className="border px-2 py-0.5">{item.trainno}</td>
//         <td className="border px-2 py-0.5">{item.trainname}</td>
//         <td className="border px-2 py-0.5">{item.from}</td>
//         <td className="border px-2 py-0.5">{item.to}</td>
//         <td className="border px-2 py-0.5">{item.layover}</td>
//         <td className="border px-2 py-0.5">{item.ETA}</td>
//         <td className="border px-2 py-0.5">{item.STA}</td>
//         <td className="border px-2 py-0.5">{item.dept}</td>
//         <td className="border px-2 py-0.5">{item.trackno}</td>
//         <td className="border px-2 py-0.5">{item.priority}</td>
//         <td className="border px-2 py-0.5 relative">
//           <div className="flex items-center gap-1">
//             <div className="flex border rounded-2xl px-2 py-0.5 bg-gray-700 text-xs">
//               <p>hold at SRGM</p>
//             </div>
//             <button
//               className="bg-gray-700 text-white px-2 py-0.5 rounded text-xs"
//               onClick={() =>
//                 setOpenRow(openRow === item.id ? null : item.id)
//               }
//             >
//               ⋮
//             </button>
//           </div>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div>
//     </div>
//   );
// }

// export default Searchtable;
