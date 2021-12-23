import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MyContext from './MyContext/index.js';

import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import PageNotFoun from './pages/PageNotFoun.jsx';
import Sing from './pages/Sing.jsx';

const App = () => {
  const user = React.useContext(MyContext);
  const render = () => (
    <MyContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing" element={<Sing />} />
        <Route path="*" element={<PageNotFoun />} />
      </Routes>
    </MyContext.Provider>
  );
  return render();
};

export default App;
