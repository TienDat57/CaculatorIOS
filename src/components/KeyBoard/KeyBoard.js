import React from "react";
import Button from "@components/Button";
import classNames from "classnames/bind";

import styles from "./KeyBoard.module.scss";

const cx = classNames.bind(styles);

function KeyBoard({ inputHandler, clearInput, changePlusMinus, calculateAnswer }) {
   return (
      <div className={cx("list-button")}>
         <Button
            optional
            onClick={clearInput}
         >
            AC
         </Button>
         <Button
            optional
            onClick={changePlusMinus}
         >
            +/-
         </Button>
         <Button
            optional
            onClick={inputHandler}
         >
            %
         </Button>
         <Button
            expression
            onClick={inputHandler}
         >
            ÷
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            7
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            8
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            9
         </Button>
         <Button
            expression
            onClick={inputHandler}
         >
            x
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            4
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            5
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            6
         </Button>
         <Button
            expression
            onClick={inputHandler}
         >
            -
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            1
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            2
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            3
         </Button>
         <Button
            expression
            onClick={inputHandler}
         >
            +
         </Button>
         <Button
            isNumber
            className={cx("button--zero")}
            onClick={inputHandler}
         >
            0
         </Button>
         <Button
            isNumber
            onClick={inputHandler}
         >
            ,
         </Button>
         <Button
            expression
            className={cx("button--equal")}
            onClick={calculateAnswer}
            id="equalButton"
         >
            =
         </Button>
      </div>
   );
};

export default KeyBoard;
