import React, {useState} from "react";
import classNames from "classnames/bind";

import styles from "./Display.module.scss";

const cx = classNames.bind(styles);

function Display({ inputShow, setInputShow, input, setInput, answer }) {

   const [indexInput, setIndexInput] = useState("");

   const getIndexInput = (e) => {
      let index = e.target.selectionStart - 1;
      event.target.classList.add("active");
      setIndexInput(index);
   };

   const onChangeTagInput = (e) => {
      const regEx = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;
      
      if (e.target.value === "" || regEx.test(e.target.value)) {
         let str = e.target.value;
         const indexInputTemp = indexInput;

         const arrInput = input.match(/\d+|\D+/g);
         arrInput[arrInput.length - 1] = str.substring(0, indexInputTemp) + str.substring(indexInputTemp + 1, str.length);
         setInputShow(str.substring(0, indexInputTemp) + str.substring(indexInputTemp + 1, str.length));
         setInput(arrInput.join(""));
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
                     value={inputShow}
                     placeholder="0"
                     maxLength={9}
                     onChange={onChangeTagInput}
                     onClick={getIndexInput}
                     autoComplete="off"
                  />
               </>
            ) : (
               <>
                  <input
                     type="text"
                     name="value"
                     className={cx("input")}
                     value={answer}
                     data-testid="answer"
                     disabled
                  />
               </>
            )}
         </div>
      </>
   );
};

export default Display;