import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-violet-600 p-6 text-white">
      <div className="text-lg font-semibold">Metered Messages</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Scroll
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer scroll-smooth hover:underline"
        >
          About
        </Scroll>
        <Scroll
          to="subscriptions"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer scroll-smooth hover:underline"
        >
          Subscriptions
        </Scroll>
        <Link
          to="/login"
          className="rounded bg-white px-4 py-2 text-violet-600 hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded bg-white px-4 py-2 text-violet-600 hover:bg-gray-100"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
