import { useEffect, useState, useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getSession, auth } from "../api/auth";
import { SessionContext } from "../context/SessionContext";
import Logo from "../images/instagram-logo.png";

export default function Navbar() {
  const context = useContext(SessionContext);

  const [session, setSession] = useState(null);

  const handleLogin = () => auth();

  useEffect(() => {
    const handleGetSession = async () => {
      const session = await getSession();
      setSession(session.data);
    };

    handleGetSession();
  }, []);

  useEffect(() => {
    console.log({ session });
  }, [session]);

  return (
    <div className="shadow-md bg-white" aria-label="Navbar">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="py-5">
            <Link className="inline-flex items-center space-x-3" to="/">
              <div>
                <img
                  className="w-6"
                  src={Logo}
                  alt="Instagram Logo"
                  aria-label="App Logo"
                />
              </div>
              <div
                className="font-logo text-xl font-semibold"
                aria-label="App Title"
              >
                Instagram Clone
              </div>
            </Link>
          </div>

          <div>
            {session && (
              <div aria-label="Profile">
                Welcome,{" "}
                <span className="font-semibold">{session.user.name}</span>!
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
