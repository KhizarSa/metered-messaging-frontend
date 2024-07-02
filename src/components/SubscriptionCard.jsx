import React, { useContext, useState } from 'react';
import credentialsContext from '../context/credentialsContext';
import Popup from './Popup';

const SubscriptionCard = ({ priceId, heading, description, features }) => {
  const { createCheckout, loggedIn, user } = useContext(credentialsContext);
  const [displayPopup, setDisplayPopup] = useState(false);

  let gradient = '';

  if (heading === 'Standard Plan') {
    gradient = 'bg-gradient-to-br from-gray-400 to-gray-600';
  } else if (heading === 'Premium Plan') {
    gradient = 'bg-gradient-to-br from-yellow-300 to-yellow-500';
  } else {
    gradient = 'bg-gradient-to-br from-violet-400 to-violet-600';
  }

  const isSubscribed = user?.subscription === heading;

  async function handleCheckout() {
    if (loggedIn && priceId) {
      createCheckout(priceId);
    } else {
      setDisplayPopup(true);
    }
  }

  return (
    <div
      className={`rounded-lg p-6 pt-10 text-center shadow-lg ${gradient} h-90 flex flex-col justify-between`}
    >
      <div>
        <h2 className="mb-4 text-2xl font-semibold">{heading}</h2>
        <p className="mb-6 text-lg">{description}</p>
        <ul className="mb-6 text-center font-medium">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleCheckout}
        disabled={isSubscribed}
        className={`rounded-full px-6 py-2 ${
          isSubscribed
            ? 'cursor-not-allowed bg-gray-400 text-gray-800'
            : 'bg-white text-gray-800 hover:bg-gray-200'
        }`}
      >
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
      {displayPopup && (
        <Popup onClose={() => setDisplayPopup(false)}>
          You are not signed in.
        </Popup>
      )}
    </div>
  );
};

export default SubscriptionCard;
