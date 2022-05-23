import { useEffect, useContext, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getSession, auth } from '../api/auth';
import { SessionContext } from '../context/SessionContext';
import Logo from '../images/instagram-logo.png';

export default function Navbar() {
  const session = useContext(SessionContext).session;
  const setSession = useContext(SessionContext).setSession;

  const handleLogin = () => auth();

  const handleGetSession = useCallback(async () => {
    const session = await getSession();
    setSession(session.data);
  }, [setSession]);

  useEffect(() => {
    console.log({ session });
    if (!session) handleGetSession();
  }, [session, handleGetSession]);

  return (
    <div className="shadow-md bg-white" aria-label="Navbar">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="py-5">
            <Link className="inline-flex items-center space-x-3" to="/">
              <div>
                <img className="w-6" src={Logo} alt="Instagram Logo" aria-label="App Logo" />
              </div>
              <div className="font-logo text-xl font-semibold" aria-label="App Title">
                Ahmed Rayhan Primadedas
              </div>
            </Link>
          </div>

          <div>
            {session && (
              <div className="flex items-center space-x-3" aria-label="Profile">
                <img className="w-10 rounded-full" src={session.user.image} alt="User Profile" />
                <div>
                  <div>{session.user.name}</div>
                  <div className="text-xs">{session.user.email}</div>
                </div>
              </div>
            )}
            {!session && (
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
