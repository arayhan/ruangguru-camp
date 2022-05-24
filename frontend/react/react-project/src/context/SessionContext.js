import { createContext, useContext, useState } from 'react';

const SessionContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    image: 'https://example.org/abc.png',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SessionContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionContext, SessionProvider, useSession };
