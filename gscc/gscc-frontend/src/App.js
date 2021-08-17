import React from 'react';
import {Route} from 'react-router-dom';
/* user */
import FreeboardPage from './pages/user/FreeboardPage';
/* admin */
import CalculatorPage from './pages/admin/CalculatorPage';

function App() {
  return (
    <>
      <Route component={FreeboardPage} path={['/@:usernmae', '/']} exact></Route>
      <Route component={CalculatorPage} path={['/calculator']} exact></Route>
    </>
  );
}

export default App;
