import React from 'react';
import PropTypes from 'prop-types';

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

   const classes = 'wrapper'
   // , {
   //    [className]: className,
   //    expression,
   //    isNumber,
   // });

   return (
      <Component className={classes} {...props}>
         <span className='title'>{children}</span>
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
