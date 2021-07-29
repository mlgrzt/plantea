import { isLoading } from "expo-font";
import React, { useState, createContext, useEffect, useMemo } from "react";

import { plantsRequest, plantsTransform } from "./plants.service";

export const PlantsContext = createContext();

export const PlantsContextProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrievePlants = () => {
    setIsLoading(true);
    setTimeout(() => {
      plantsRequest()
        .then(plantsTransform)
        .then((results) => {
          setIsLoading(false);
          setPlants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrievePlants();
  }, []);
  
  return (
    <PlantsContext.Provider value={{ plants, isLoading, error }}>
      {children}
    </PlantsContext.Provider>
  );
};
