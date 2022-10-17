import React from "react";
import classNames from "classnames/bind";

import styles from "./Display.module.scss";

const cx = classNames.bind(styles);

function Display({ input, setInput, answer }) {

   const onChangeTagInput = (e) => {
      const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

      if (e.target.value === "" || re.test(e.target.value)) {
         setInput(e.target.value);
      }
   };

   return (
      <>
         <div className={cx("display")}>
            {answer === "" ? (
               <>
                  <input
                     type="text"
                     name="input"
                     className={cx("input")}
                     value={input}
                     placeholder="0"
                     maxLength={12}
                     onChange={onChangeTagInput}
                     autoComplete="off"
                  />
               </>
            ) : (
               <>
                  <input
                     type="text"
                     name="input"
                     className={cx("value")}
                     value={input}
                     placeholder="0"
                     maxLength={12}
                     disabled
                  />
                  <input
                     type="text"
                     name="value"
                     className={cx("input")}
                     value={answer}
                     disabled
                  />
               </>
            )}
         </div>
      </>
   );
};

export default Display;