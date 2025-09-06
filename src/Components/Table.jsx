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




// import { useState } from "react";

// function Table() {
//   const [query, setQuery] = useState("");
//   const [openRow, setOpenRow] = useState(null); 

//   const rows = [
//     { id: 1, trainno: "123", trainname: "cholas", from: "CBE", to: "TPJ", layover: "343", ETA: "fdi", STA: "fkjgn", dept: "12:00", trackno: "4", priority: "1" },
//     { id: 2, trainno: "456", trainname: "pandian", from: "MDU", to: "CBE", layover: "120", ETA: "abc", STA: "def", dept: "14:00", trackno: "2", priority: "2" },
//     { id: 3, trainno: "789", trainname: "cheran", from: "CBE", to: "MAS", layover: "200", ETA: "ghi", STA: "jkl", dept: "16:00", trackno: "3", priority: "1" },
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
//     <div className="bg-gray-400 w-3/4 justify-self-end">
//       <input
//         type="text"
//         placeholder=" 🔎 Search Using Train No / Name / From / To "
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="px-96 m-2 p-4 text-black "
//       />

//       <table className="text-white bg-black font-extralight table-auto border-collapse w-full">
//         <thead>
//           <tr>
//             <th className="w-1 whitespace-nowrap border-x px-4 py-1">S.No</th>
//             <th className="border-x px-2 py-1">Train No</th>
//             <th className="border-x px-2 py-1">Train Name</th>
//             <th className="border-x px-2 py-1">From</th>
//             <th className="border-x px-2 py-1">To</th>
//             <th className="border-x px-2 py-1">Layover</th>
//             <th className="border-x px-2 py-1">ETA</th>
//             <th className="border-x px-2 py-1">STA</th>
//             <th className="border-x px-2 py-1">Dept Time</th>
//             <th className="border-x px-2 py-1">Track No</th>
//             <th className="border-x px-2 py-1">Priority</th>
//             <th className="border-x px-2 py-1">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredRows.length > 0 ? (
//             filteredRows.map((item) => (
//               <tr key={item.id}>
//                 <td className="border-x px-4 py-1">{item.id}</td>
//                 <td className="border-x px-2 py-1">{item.trainno}</td>
//                 <td className="border-x px-2 py-1">{item.trainname}</td>
//                 <td className="border-x px-2 py-1">{item.from}</td>
//                 <td className="border-x px-2 py-1">{item.to}</td>
//                 <td className="border-x px-2 py-1">{item.layover}</td>
//                 <td className="border-x px-2 py-1">{item.ETA}</td>
//                 <td className="border-x px-2 py-1">{item.STA}</td>
//                 <td className="border-x px-2 py-1">{item.dept}</td>
//                 <td className="border-x px-2 py-1">{item.trackno}</td>
//                 <td className="border-x px-2 py-1">{item.priority}</td>
//                 <td className="border-x px-2 py-1 relative">
//                   <div className="flex">
//                   <div className="flex border rounded-3xl px-3 py-1 bg-gray-700 font-extralight w-max">
//                      <p>hold at SRGM for 5 mins</p>
//             </div>
//                   <button
//                     className="bg-gray-700 text-white px-2 py-1 rounded"
//                     onClick={() =>
//                       setOpenRow(openRow === item.id ? null : item.id)
//                     }
//                   >
//                     ⋮
//                   </button>
// </div>
//                   {openRow === item.id && (
//                     <div className="absolute right-0 mt-2 bg-black border border-gray-600 rounded-xl p-2 text-sm space-y-2 z-10">
//                       <div className="flex items-center gap-2">
//                         <p>Hold At</p>
//                         <p className="bg-gray-700 text-white px-2 rounded">SRGM V</p>
//                       </div>

//                       <div className="flex items-center gap-2">
//                         <p>Change Platform</p>
//                         <p className="bg-gray-700 text-white px-2 rounded">1 V</p>
//                       </div>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="12" className="text-center py-4 text-gray-400">
//                 🚉 No trains found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;
