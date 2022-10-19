import React from "react";
import classNames from "classnames/bind";

import styles from "./History.module.scss";

const cx = classNames.bind(styles);

function History() {
   let history = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("listCalculation")) : [];
   return (
      <div className={cx("listHistory")}>
         <h1 className={cx("history-title")}>History</h1>
         <ol className={cx("list-calculation")}>
            {history && history.map((item, index) => {
               return (
                  <li key={index} className={cx("history-item")}>
                     <span>{item.expression} = {item.result}</span>
                  </li>
               )
            })}
         </ol>
         <button className={cx("clear-history")} onClick={() => {
            localStorage.clear();
            window.location.reload();
         }}>Clear History</button>
      </div>
   );
}

export default History;