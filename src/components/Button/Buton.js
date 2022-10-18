import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   expression = false,
   isNumber = false,
   optional = false,
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
      optional,
   });
   
   return (
      <Component className={classes} {...props}>
         <span className={cx('title')}>{children}</span>
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
