import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { evaluate, round } from "mathjs";

import Display from '@components/Display';
import Header from '@components/Header';
import KeyBoard from '~/components/KeyBoard';
import styles from './Calculator.module.scss';

const cx = classNames.bind(styles);

function Calculator() {
   const [input, setInput] = useState("");
   const [answer, setAnswer] = useState("");

   const inputHandler = (event) => {
      if (answer === "Invalid Input!!") return;
      let valueInput = event.target.innerText;

      let stringInput = input + valueInput;
      if (stringInput.length > 14) return;

      if (answer !== "") {
         setInput(answer + valueInput);
         setAnswer("");
      } else setInput(stringInput);
   };

   const clearInput = () => {
      setInput("");
      setAnswer("");
   };

   const calculateAns = () => {
      if (input === "") return;
      let result = 0;
      let finalExpression = input;
      finalExpression = finalExpression.replaceAll("x", "*");
      finalExpression = finalExpression.replaceAll("÷", "/");

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
         if (input.charAt(0) === "-") {
            let plus = "+";
            setInput((prev) => plus.concat(prev.slice(1, prev.length)));
         } else if (input.charAt(0) === "+") {
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
            <Display input={input} setInput={setInput} answer={answer} />
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
