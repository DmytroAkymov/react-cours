import { useState } from 'react';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
    agreement: false,
  });

  function submitFn(event) {
    event.preventDefault();
    console.log(data);
  }

  function handelOnChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  function alertClick() {
    data.agreement === true ? alert('Ok!') : alert('No!');
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={submitFn}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handelOnChange(e, 'username')}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handelOnChange(e, 'password')}
          ></input>
        </label>
        <label>
          E-mail:
          <input
            type="email"
            value={data.email}
            onChange={(e) => handelOnChange(e, 'email')}
          ></input>
        </label>
        <label>
          Agreement:
          <input
            type="checkbox"
            checked={data.agreement}
            onChange={(e) => setData({ ...data, agreement: e.target.checked })}
          ></input>
        </label>
        <button type="submit" onClick={alertClick}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
