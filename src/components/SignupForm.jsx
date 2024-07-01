import React from 'react';

const SignupForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
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
          placeholder="you@example.com"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          minLength="8"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="passwordConfirm"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="passwordConfirm"
          placeholder="••••••••"
          minLength="8"
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-base leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-violet-600 px-4 py-2 text-lg font-bold text-white hover:bg-purple-700 focus:outline-none"
        >
          Signup
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
