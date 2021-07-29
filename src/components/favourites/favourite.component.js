import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  z-index: 9;
`;

export const Favourite = ({ plant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((e) => e.name === plant.name);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(plant) : removeFromFavourites(plant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "red"}
      />
    </FavouriteButton>
  );
};
