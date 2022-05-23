import { createContext, useState } from 'react';

export const SessionContext = createContext({ session: null });

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  return (
    <SessionContext.Provider value={{ session: session, setSession: setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
