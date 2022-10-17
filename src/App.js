import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import Button from './components/Button';

const App = ({ route }) => (
   <div>
      {renderRoutes(route.routes)}
   </div>
);

App.propTypes = {
   route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
   route: null,
};

export default { component: App };