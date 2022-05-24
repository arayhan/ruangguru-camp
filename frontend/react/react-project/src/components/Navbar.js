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

  const handleAuth = () => auth();

  useEffect(() => {
    const handleGetSession = async () => {
      try {
        const response = await getSession();

        if (Object.values(response.data).length > 0) {
          setUser(response.data.user);
          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log({ error });
      }
    };

    handleGetSession();
  }, [setUser, setIsLoggedIn]);

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

          <div aria-label="Profile">
            <div>{user?.name}</div>
            {user && (
              <div className="relative">
                <button
                  className="flex items-center space-x-3 hover:bg-gray-100 py-3 px-5 rounded-md"
                  onClick={() => setShowDropdown(!showDropdown)}
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
                      onClick={handleAuth}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {!user && (
              <button
                className="flex items-center space-x-2 bg-primary rounded-md px-6 py-3 text-white transition hover:bg-primary-600"
                onClick={handleAuth}
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
