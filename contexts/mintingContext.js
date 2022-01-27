import { createContext, useContext, useEffect, useState } from "react";

const MintingContext = createContext();

export function MintingProvider({ children }) {
  const [screen, setScreen] = useState("1");
  const [userDetails, setUserDetails] = useState({ email: "", name: "" });

  useEffect(() => {
    // console.log(userDetails);
  }, [userDetails]);

  return (
    <MintingContext.Provider
      value={{ setUserDetails, userDetails, screen, setScreen }}
    >
      {children}
    </MintingContext.Provider>
  );
}

export function useMintingContext() {
  const context = useContext(MintingContext);

  if (!context)
    throw new Error(
      "useMintingContext must be used inside a `MintingProvider`"
    );

  return context;
}
