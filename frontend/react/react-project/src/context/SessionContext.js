import { createContext, useContext, useState } from 'react';

const SessionContext = createContext({
  session: null,
  setSession: null,
});

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  return (
    <SessionContext.Provider value={{ session: session, setSession: setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionContext, SessionProvider, useSession };
