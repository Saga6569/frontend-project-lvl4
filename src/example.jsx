import React from 'react';

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Login from './pages/login.jsx';
import PageNotFoun from './pages/PageNotFoun.jsx';
import Sing from './pages/Sing.jsx';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sing" element={<Sing />} />
      <Route path="*" element={<PageNotFoun />} />
    </Routes>
  </>
);

export default App;
