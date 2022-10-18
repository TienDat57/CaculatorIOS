import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { evaluate, i, round } from "mathjs";

import Display from '@components/Display';
import Header from '@components/Header';
import KeyBoard from '~/components/KeyBoard';
import styles from './Calculator.module.scss';

const cx = classNames.bind(styles);

function Calculator() {
   const [input, setInput] = useState("");
   const [inputShow, setInputShow] = useState("");
   const [answer, setAnswer] = useState("");

   const inputHandler = (event) => {
      let val = event.target.innerText;
      
      const changeAC = document.getElementById("clearButton");
      changeAC.innerText = "C";

      if (val > 9) return;
      let str = input + val;

      if (val != "+" && val != "-" && val != "x" && val != "÷") {
         setInputShow(inputShow + val);
      } if (input[input.length - 1] == "+" || input[input.length - 1] == "-" || input[input.length - 1] == "x" || input[input.length - 1] == "÷") {
         setInputShow(val);
      }

      if (answer !== "") {
         setInput(answer + val);
         setAnswer("");
      } else setInput(str);
   };


   const clearInput = (event) => {
      event.target.innerText = "AC";
      setInput("");
      setInputShow("");
      setAnswer("");
   };

   const calculateAns = () => {
      if (input === "") return;
      let result = 0;
      let finalExpression = input;
      finalExpression = finalExpression.replaceAll("x", "*");
      finalExpression = finalExpression.replaceAll("÷", "/");
      finalExpression = finalExpression.replaceAll(",", ".");

      result = evaluate(finalExpression);
      isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
   };

   const changePlusMinus = () => {
      if (answer === "Invalid Input!!") return;
      else if (answer !== "") {
         let ans = answer.toString();
         if (ans.charAt(0) === "-") {
            let plus = "+";
            setInput(plus.concat(ans.slice(1, ans.length)));
         } else if (ans.charAt(0) === "+") {
            let minus = "-";
            setInput(minus.concat(ans.slice(1, ans.length)));
         } else {
            let minus = "-";
            setInput(minus.concat(ans));
         }
         setAnswer("");
      } else {
         if (inputShow.charAt(0) === "-") {
            let plus = "+";
            setInput((prev) => plus.concat(prev.slice(1, prev.length)));
         } else if (inputShow.charAt(0) === "+") {
            let minus = "-";
            setInput((prev) => minus.concat(prev.slice(1, prev.length)));
         } else {
            let minus = "-";
            setInput((prev) => minus.concat(prev));
         }
      }
   };

   return (
      <div className={cx("main")}>
         <div className={cx("calculator")}>
            <Header />
            <Display input={inputShow} setInput={setInputShow} answer={answer} />
            <KeyBoard
               inputHandler={inputHandler}
               clearInput={clearInput}
               calculateAnswer={calculateAns}
               changePlusMinus={changePlusMinus}
            ></KeyBoard>
         </div>
      </div>
   );
}

export default Calculator;
