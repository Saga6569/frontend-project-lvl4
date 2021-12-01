import { Link } from 'react-router-dom';

import React from 'react';

const PageNotFoun = () => (
  <div>
    такой страницы не существует
    <Link to="/"> вернуться </Link>
  </div>
);

export default PageNotFoun;
