/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import MyContext from '../MyContext/index.js';

const Login = () => {
  const navigate = useNavigate();
  const av = { isAv: false, eror: null };
  const User = React.useContext(MyContext);
  const render = () => (
    <div>
      <h1 className="text-center mb-4">Войти</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (values) => {
          console.log(User);
          try {
            const response = await axios.post('/api/v1/login', values);
            const { username, token } = response.data;
            console.log(username, token);
            localStorage.setItem('name', username);
            localStorage.setItem('token', token);
            User.userName = username;
            navigate('../', { replace: true });
          } catch {
            av.isAv = true;
            av.eror = 'Неверные имя пользователя или пароль';
          }
        }}
      >
        {() => (
          <Form>
            <div className="form-floating mb-3 form-group">
              <Field name="username" autoComplete="username" required="" placeholder="Ваш ник" id="username" className={cn('form-control', { 'is-invalid': av.isAv })} />
              <label htmlFor="username">Ваш ник</label>
            </div>
            <div className="form-floating mb-4 form-group">
              <Field name="password" autoComplete="current-password" required="" placeholder="Пароль" type="password" id="password" className={cn('form-control', { 'is-invalid': av.isAv })} />
              <div className="invalid-tooltip">{av.eror === null ? null : av.eror}</div>
              <label className="form-label" htmlFor="password">Пароль</label>
            </div>
            <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
          </Form>
        )}
      </Formik>
    </div>
  );
  return render();
};

export default Login;
