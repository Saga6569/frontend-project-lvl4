import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов'),
  password: Yup.string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов'),
});

export const DisplayingErrorMessagesExample = () => (
  <div>
    <h1 className="text-center mb-4">Войти</h1>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-floating mb-3 form-group">
            <Field name="username" autoComplete="username" required="" placeholder="Ваш ник" id="username" className="form-control" />
            {touched.username && errors.username && <div>{errors.username}</div>}
            <label htmlFor="username">Ваш ник</label>
          </div>
          <div className="form-floating mb-4 form-group">
            <Field name="password" autoComplete="current-password" required="" placeholder="Пароль" type="password" id="password" className="form-control" />
            {touched.password && errors.password && <div>{errors.password}</div>}
            <label className="form-label" htmlFor="password">Пароль</label>
          </div>
          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default DisplayingErrorMessagesExample;
