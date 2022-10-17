import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   expression = false,
   isNumber = false,
   children,
   className,
   onClick,
   ...passProps
}) {
   let Component = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   const classes = cx('wrapper', {
      [className]: className,
      expression,
      isNumber,
   });

   const classTitle = cx('title', {
      expression,
      isNumber,
   });

   return (
      <Component className={classes} {...props}>
         <span className={classTitle}>{children}</span>
      </Component>
   );
}

Button.propTypes = {
   expression: PropTypes.bool,
   isNumber: PropTypes.bool,
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   onClick: PropTypes.func,
};

export default Button;
