import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import credentialsContext from '../context/credentialsContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(credentialsContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login) {
      const data = await login(email, password);
      if (data.status === 'success') {
        navigate('/');
      } else {
        setErrorMessage(data.message);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          minLength="8"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          minLength="8"
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      {errorMessage && (
        <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
      )}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-violet-600 px-4 py-2 text-lg font-bold text-white hover:bg-purple-700 focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
