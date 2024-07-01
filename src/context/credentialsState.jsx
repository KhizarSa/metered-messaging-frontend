import { useState } from 'react';
import credentialsContext from './credentialsContext';
import axios from 'axios';
import Stripe from 'stripe';

export default function CredentialsState(props) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

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
      setToken(response.data.token);
      setUser(response.data.data.user);
      setLoggedIn(true);
    }

    return response.data;
  }

  async function fetchProducts() {
    const response = await axios.get(`${api}product`);

    return response;
  }

  async function createCheckout(priceId) {
    if (loggedIn) {
      console.log(priceId, user.email);
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
        window.open(session.url, '_blank');
      }
    }
  }

  return (
    <credentialsContext.Provider
      value={{ login, token, fetchProducts, createCheckout }}
    >
      {props.children}
    </credentialsContext.Provider>
  );
}
