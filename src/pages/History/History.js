import React from "react";

function History() {
   let history = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("listCalculation")) : [];
   return (
      <div className="listHistory">
         <h1>History</h1>
         <ul>
            {history && history.map((item, index) => {
               return (
                  <li key={index}>
                     <span>{item.expression} = {item.result}</span>
                  </li>
               )
            })}
         </ul>
      </div>
   );
}

export default History;