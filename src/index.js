import React from 'react';
import routes from './routes/index.route';
import { Route, Routes } from 'react-router-dom';

function App() {
   return (
      <div className="wrapper">
         <div>hello world</div>
         <Routes>
            {routes.map(({ path, component: Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}
         </Routes>
      </div>
   );
}

export default App;
