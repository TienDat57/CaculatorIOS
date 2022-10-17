import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Display from '@components/Display';
import Header from '@components/Header';
import Button from '~/components/Button';
import KeyBoard from '~/components/KeyBoard';
import styles from './Calculator.module.scss';

const cx = classNames.bind(styles);

function Calculator() {
   const [input, setInput] = useState("");
   const [answer, setAnswer] = useState("");

   const inputHandler = (event) => {
      if (answer === "Invalid Input!!") return;
      let val = event.target.innerText;

      if (val === "x2") val = "^2";
      else if (val === "x3") val = "^3";
      else if (val === "3√") val = "^(1÷3)";
      else if (val === "log") val = "log(";

      let str = input + val;
      if (str.length > 14) return;

      if (answer !== "") {
         setInput(answer + val);
         setAnswer("");
      } else setInput(str);
   };

   const clearInput = () => {
      setInput("");
      setAnswer("");
   };

   const checkBracketBalanced = (expr) => {
      let stack = [];
      for (let i = 0; i < expr.length; i++) {
         let x = expr[i];
         if (x === "(") {
            stack.push(x);
            continue;
         }

         if (x === ")") {
            if (stack.length === 0) return false;
            else stack.pop();
         }
      }
      return stack.length === 0;
   };

   const calculateAns = () => {
      if (input === "") return;
      let result = 0;
      let finalExpression = input;
      finalExpression = finalExpression.replaceAll("x", "*");
      finalExpression = finalExpression.replaceAll("÷", "/");

      let noSqrt = input.match(/√[0-9]+/gi);

      if (noSqrt !== null) {
         let evalSqrt = input;
         for (let i = 0; i < noSqrt.length; i++) {
            evalSqrt = evalSqrt.replace(
               noSqrt[i],
               `sqrt(${noSqrt[i].substring(1)})`
            );
         }
         finalExpression = evalSqrt;
      }

      try {
         if (!checkBracketBalanced(finalExpression)) {
            const errorMessage = { message: "Brackets are not balanced!" };
            throw errorMessage;
         }
         result = evaluate(finalExpression);
      } catch (error) {
         result =
            error.message === "Brackets are not balanced!"
               ? "Brackets are not balanced!"
               : "Invalid Input!!";
      }
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
