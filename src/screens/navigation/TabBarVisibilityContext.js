import React, { createContext, useContext, useState } from "react";

const TabBarVisibilityContext = createContext();

export const TabBarVisibilityProvider = ({ children }) => {
  const [isTextInputFocused, setTextInputFocused] = useState(false);

  return (
    <TabBarVisibilityContext.Provider value={{ isTextInputFocused, setTextInputFocused }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};

export const useTabBarVisibility = () => useContext(TabBarVisibilityContext);