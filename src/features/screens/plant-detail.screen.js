import React from "react";
import { PlantInfoCard } from "../components/plant-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Favourite } from "../../components/favourites/favourite.component";

export const PlantDetailScreen = ({ route }) => {
  // passing information
  const { plant } = route.params;
  return (
    <SafeArea>
      <PlantInfoCard plant={plant} />
      <Favourite plant={plant} />
    </SafeArea>
  );
};
