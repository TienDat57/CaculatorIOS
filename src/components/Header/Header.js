import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   return (
      <div className={cx('calculatorHeader', 'header')}>
         <div className={cx('icon')}>
            <span className={cx('iconCircle', 'iconCircle-red')}></span>
            <span className={cx('iconCircle', 'iconCircle-yellow')}></span>
            <span className={cx('iconCircle', 'iconCircle-green')}></span>
         </div>
      </div>
   );
}

export default Header;