import { Calculator, History, NotFound } from '../pages/index';
import App from '../App';

export default [{
   ...App,
   routes: [
      {
         path: '/',
         component: Calculator,
         exact: true,
      },
      {
         path: '/history',
         component: History,
      },
      {
         component: NotFound,
      },
   ],
}];
