import React, { createContext, FC, useState } from 'react';

export interface IFirstLoadContext {
  isFirstLoad: boolean;
  setIsFirstLoad: (value: boolean) => void;
}

export const FirstLoadContext = createContext<IFirstLoadContext>({
  isFirstLoad: true,
  setIsFirstLoad: () => {},
});

const FirstLoadProvider: FC = ({ children }) => {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  return (
    <FirstLoadContext.Provider
      value={{
        isFirstLoad,
        setIsFirstLoad: (value: boolean) => setIsFirstLoad(value),
      }}
    >
      {children}
    </FirstLoadContext.Provider>
  );
};

export default FirstLoadProvider;
