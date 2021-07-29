import React from "react";
import { StyleSheet } from "react-native";
// import { Text } from "../../../components/typography/text.component";
import {
  PlantCard,
  PlantCardCover,
  PlantCardContainer,
  PlantCardTitle,
} from "./plant-info-card.styles";

export const PlantInfoCard = ({ plant = {} }) => {
  const {
    photos = [
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2624&q=80",
    ],
    name = "Plant name",
    botanicalName = "Plant orginal name",
  } = plant;
  return (
    <PlantCard elevation={5}>
      <PlantCardContainer style={styles.cardContent}>
        <PlantCardCover key={name} source={{ uri: photos[0] }} />
        <PlantCardTitle title={name} subtitle={botanicalName} />
      </PlantCardContainer>
    </PlantCard>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
