# Metered Messages - Frontend

Welcome to Metered Messages, a SaaS application designed to provide metered messaging services through subscription plans. Users can subscribe to various plans to obtain a specific limit of messages for communication. Once the limit is reached, users are prompted to upgrade their subscription to continue messaging.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **React Router**: Navigation library for handling routes in the application.
- **Context API**: State management tool for managing global application state.
- **Tailwind CSS**: Utility-first CSS framework for styling components.

## Build Process

Follow these steps to set up and run the Metered Messages frontend on your local machine:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (v6 or later)

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/KhizarSa/metered-messaging-frontend
cd metered-messages-frontend
```

Install the required dependencies:

```
npm install
```

### Configuration

Before running the application:

1. In ./src/components/Message.jsx at the top in socket enter your server url and port if local.
2. Open the ./src/context/credentialsState.jsx file.
3. Locate the createCheckout function.
4. Replace the placeholder with your Stripe public key.

```
async function createCheckout(priceId) {
  if (loggedIn) {
  const stripe = await Stripe('YOUR_STRIPE_PUBLIC_KEY_HERE');
  // ... rest of the code
  }
};
```

### Features

- User Authentication: Secure login and registration.
- Subscription Plans: Different plans offering varying message limits.
- Metered Messaging: Track and limit the number of messages based on the user's subscription.
- Stripe Integration: Secure payment processing for subscription plans.
