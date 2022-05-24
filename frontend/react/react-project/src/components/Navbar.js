import { useState, useEffect, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { getSession, auth } from '../api/auth';
import { useSession } from '../context/SessionContext';
import Logo from '../images/instagram-logo.png';

export default function Navbar() {
  const user = useSession().user;
  const setUser = useSession().setUser;
  const isLoggedIn = useSession().isLoggedIn;
  const setIsLoggedIn = useSession().setIsLoggedIn;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => auth();
  const handleLogout = () => setUser(null);

  const handleGetSession = useCallback(() => {
    getSession()
      .then((session) => {
        setUser(session.data.user);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log({ err }));
  }, [setUser, setIsLoggedIn]);

  useEffect(() => handleGetSession(), [handleGetSession]);

  return (
    <div className="shadow-md bg-white" aria-label="Navbar">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="py-5">
            <a href="/" className="inline-flex items-center space-x-3" aria-label="App Title">
              <div>
                <img className="w-6" src={Logo} alt="Instagram Logo" aria-label="App Logo" />
              </div>
              <div className="font-logo text-xl font-semibold">Instagram Clone</div>
            </a>
          </div>

          <div>
            {isLoggedIn && (
              <div className="relative">
                <button
                  className="flex items-center space-x-3 hover:bg-gray-100 py-3 px-5 rounded-md"
                  onClick={() => setShowDropdown(!showDropdown)}
                  aria-label="Profile"
                >
                  <img className="w-10 rounded-full" src={user.image} alt="User Profile" />
                  <div className="text-left">
                    <div>{user.name}</div>
                    <div className="text-xs">{user.email}</div>
                  </div>
                </button>

                {showDropdown && (
                  <div className="absolute z-10 left-0 bg-white w-full rounded-sm shadow-md border">
                    <button
                      className="text-sm p-3 text-left hover:bg-gray-100 w-full"
                      aria-label="Logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {!isLoggedIn && (
              <button
                className="flex items-center space-x-2 bg-primary rounded-md px-6 py-3 text-white transition hover:bg-primary-600"
                onClick={handleLogin}
                aria-label="Login"
              >
                <div>Login</div>
                <div>
                  <FiLogIn />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
