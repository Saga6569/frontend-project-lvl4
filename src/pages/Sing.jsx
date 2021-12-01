import React from 'react';

const Sing = () => (
  <>
    <form className="w-50">
      <h1 className="text-center mb-4">Регистрация</h1>
      <div className="form-floating mb-3 form-group">
        <input placeholder="От 3 до 20 символов" name="username" autoComplete="username" required="" id="username" className="form-control is-invalid" value="" />
        <label className="form-label" htmlFor="username">Имя пользователя</label>
        <div placement="right" className="invalid-tooltip">Обязательное поле</div>
      </div>
      <div className="form-floating mb-3 form-group">
        <input placeholder="Не менее 6 символов" name="password" aria-describedby="passwordHelpBlock" required="" autoComplete="new-password" type="password" id="password" className="form-control" value="" />
        <div className="invalid-tooltip">Обязательное поле</div>
        <label className="form-label" htmlFor="password">Пароль</label>
      </div>
      <div className="form-floating mb-4 form-group">
        <input placeholder="Пароли должны совпадать" name="confirmPassword" required="" autoComplete="new-password" type="password" id="confirmPassword" className="form-control" value="" />
        <div className="invalid-tooltip" />
        <label className="form-label" htmlFor="confirmPassword">Подтвердите пароль</label>
      </div>
      <button type="submit" className="w-100 btn btn-outline-primary">Зарегистрироваться</button>
    </form>
  </>
);

export default Sing;
