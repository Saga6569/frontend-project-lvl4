import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token === null) {
      navigate('Login', { replace: true });
    }
  }, []);

  return (<div>тут будет  Чат !</div>);
};

export default Chat;
