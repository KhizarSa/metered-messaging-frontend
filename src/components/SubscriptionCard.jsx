import React, { useContext } from 'react';
import credentialsContext from '../context/credentialsContext';

const SubscriptionCard = ({ priceId, heading, description, features }) => {
  const { createCheckout } = useContext(credentialsContext);

  let gradient = '';

  if (heading === 'Standard Plan') {
    gradient = 'bg-gradient-to-br from-gray-400 to-gray-600';
  } else if (heading === 'Premium Plan') {
    gradient = 'bg-gradient-to-br from-yellow-300 to-yellow-500';
  } else {
    gradient = 'bg-gradient-to-br from-violet-400 to-violet-600';
  }

  async function handleCheckout() {
    if (priceId) {
      createCheckout(priceId);
    }
  }

  return (
    <div
      className={`rounded-lg p-6 pt-10 text-center shadow-lg ${gradient} flex h-96 h-full flex-col justify-between`}
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
        className="rounded-full bg-white px-6 py-2 text-gray-800 hover:bg-gray-200"
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionCard;
