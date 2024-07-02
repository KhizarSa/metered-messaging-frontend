import { useState } from 'react';
import credentialsContext from './credentialsContext';
import axios from 'axios';
import Stripe from 'stripe';

export default function CredentialsState(props) {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {},
  );
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const api = 'http://localhost:4500/api/v1/';

  async function login(email, password) {
    const response = await axios.post(
      `${api}user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.data.status === 'success') {
      const user = response.data.data.user;
      const token = response.data.token;
      setToken(token);
      setUser(user);
      setLoggedIn(true);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }

    return response.data;
  }

  async function signup(userObj) {
    const { name, email, password, passwordConfirm } = userObj;
    const response = await axios.post(
      `${api}user/signup`,
      {
        name,
        email,
        password,
        passwordConfirm,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.data.status === 'success') {
      const user = response.data.data.user;
      const token = response.data.token;
      setToken(token);
      setUser(user);
      setLoggedIn(true);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }

    return response.data;
  }

  async function logout() {
    const response = await axios.get(`${api}user/logout`);

    if (response.data.status === 'success') {
      setLoggedIn(false);
      setToken('');
      setUser({});
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  async function deleteMe() {
    const response = await axios.delete(`${api}user/deleteMe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status === 'success') {
      setLoggedIn(false);
      setToken('');
      setUser({});
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  async function getMe() {
    const response = await axios.get(`${api}user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status === 'success') {
      setUser(response.data.data.data);
      localStorage.setItem('user', JSON.stringify(response.data.data.data));
    } else {
      setLoggedIn(false);
      setToken('');
      setUser({});
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  async function fetchProducts() {
    const response = await axios.get(`${api}product`);

    return response;
  }

  async function createCheckout(priceId) {
    if (loggedIn) {
      const stripe = Stripe(
        'pk_test_51NfkjqFOx37dgf6yGi4KzOD62Cxj2CG0yOHFlWLaFJrm4ZKMB0Ja6Eb4ecxVmq0x8Uo7imt8iUDBvjtiQxj2i1o500QdvBGh74',
      );

      const response = await axios.post(
        `${api}subscription/checkout-session`,
        {
          email: user.email,
          priceId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const session = response.data.data.session;

      if (session.id) {
        location.href = session.url;
      }
    }
  }

  async function updateMessages(email) {
    const response = await axios.patch(
      `${api}subscription/update-messages/${email}`,
    );

    if (response.data.status === 'success') {
      setUser(response.data.data.user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  return (
    <credentialsContext.Provider
      value={{
        login,
        signup,
        logout,
        deleteMe,
        getMe,
        fetchProducts,
        createCheckout,
        setToken,
        setUser,
        updateMessages,
        token,
        user,
        loggedIn,
      }}
    >
      {props.children}
    </credentialsContext.Provider>
  );
}
