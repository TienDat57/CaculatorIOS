import React from "react";
import classNames from "classnames/bind";

import styles from "./Display.module.scss";

const cx = classNames.bind(styles);

function Display() {
   return (
      <div>
         <h1>Header Component</h1>
      </div>
   );
}

export default Display;