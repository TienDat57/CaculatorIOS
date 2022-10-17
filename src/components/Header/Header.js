import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   return (
      <div>
         <h1>Header Component</h1>
      </div>
   );
}

export default Header;