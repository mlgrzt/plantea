import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (plant) => {
    setFavourites([...favourites, plant]);
  };

  const remove = (plant) => {
    const newFavourites = favourites.filter((x) => x.name !== plant.name);
    setFavourites(newFavourites)
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
