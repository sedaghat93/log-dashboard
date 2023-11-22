import React from 'react'

function AllErrors({listOfErrors, isShow}) {
    console.log(listOfErrors);
 return (
    <p>hi</p>
 
//  {listOfErrors.map((listOfError, index) => {
//           const isLast = index === listOfErrors.length - 1;
//           const classes = isLast
//             ? "p-5 bg-slate-500"
//             : "p-5 border-b border-blue-gray-50 bg-slate-500";
//           return (
//             <tr key={listOfError.id}>
//               <td className={classes}>{listOfError.name}</td>
//               <td className={classes}>{listOfError.error}</td>
//               <td className={classes}>{listOfError.line}</td>
//               <td className={classes}>{listOfError.nameClass}</td>
//               <td className={classes}>{listOfError.date}</td>
//               <td className={classes}>
//                 <button
//                   className="btn-err bg-slate-500"
//                   onClick={() => displayModelHandler(listOfError.id)}
//                 >
//                   <FaEye className="text-2xl flex justify-center" />
//                 </button>
//                 {isShow && (
//                   <ModalShow open={isShow} onClose={() => setIsShow(false)}>
//                     {filteredErrors.map((filteredError) => (
//                       <>
//                         <p>action: {filteredError.action}</p>
//                         <p>date: {filteredError.date}</p>
//                         <p>error: {filteredError.error}</p>
//                         <p>line: {filteredError.line}</p>
//                         <p>name: {filteredError.name}</p>
//                         <p>nameClass: {filteredError.nameClass}</p>
//                         <p>type:{filteredError.type}</p>
//                       </>
//                     ))}
//                   </ModalShow>
//                 )}
//               </td>
//             </tr>
//           );
//         })}
 )
}

export default AllErrors