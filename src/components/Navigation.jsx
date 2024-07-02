import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import credentialsContext from '../context/credentialsContext';

const Navigation = () => {
  const { loggedIn, user, logout } = useContext(credentialsContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    if (loggedIn && user) {
      setShowDropdown(false); // Close dropdown if user changes
    }
  }, [loggedIn, user]);

  return (
    <nav className="flex items-center justify-between bg-violet-600 p-6 text-white">
      <div className="text-lg font-semibold">Metered Messages</div>
      <div className="relative space-x-4">
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
        {loggedIn && user ? (
          <div className="relative inline-block text-left">
            <button
              onClick={handleDropdownToggle}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-violet-600"
            >
              {user.name.charAt(0).toUpperCase()}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
