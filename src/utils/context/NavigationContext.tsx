"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_NAVIGATION } from "@/graphql/queries";

const NavigationContext = createContext<any>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navigation, setNavigation] = useState<any>(null);
  const { data, loading, error } = useQuery(GET_NAVIGATION, {
    variables: { navigationIdOrSlug: "main-navigation" }, // Remplace par ton ID de navigation
  });

  useEffect(() => {
    if (data) {
      setNavigation(data.renderNavigation);
    }
  }, [data]);

  return (
    <NavigationContext.Provider value={{ navigation, loading, error }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useNavigation = () => {
  return useContext(NavigationContext);
};
