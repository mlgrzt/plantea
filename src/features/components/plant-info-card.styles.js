import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const PlantCard = styled(Card)`
  border-radius: 14px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const PlantCardContainer = styled(Card.Content)`
  flex-direction: row;
  align-items: center;
`;

export const PlantCardCover = styled(Card.Cover)`
  width: 60px;
  height: 60px;
  padding: ${(props) => props.theme.space[0]};
`;
export const PlantCardTitle = styled(Card.Title).attrs({
  titleStyle: {
    fontFamily: "NotoSansJP_400Regular",
  },

  subtitleStyle: {
    fontStyle: "italic",
  },
})``;
