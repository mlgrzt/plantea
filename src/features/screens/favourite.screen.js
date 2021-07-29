import React, { useContext, useState } from "react";
// import { Searchbar } from "react-native-paper";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button, Title } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { PlantInfoCard } from "../components/plant-info-card.component";
import { FavouritesContext } from "../../services/favourites/favourites.context";
// import { Fragment } from "react";
import { Favourite } from "../../components/favourites/favourite.component";

const BackgroundImage = styled(ImageBackground)`
  flex: 1;

`;
const PlantsList = styled(FlatList)`
  padding: 10px;
  padding-top: 60px;
  margin-top: -50px;
  flex: 1;
`;

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const [search] = useState("");
  // const renderItem = ({ item }) => {
  //   return (
  //     <Fragment>
  //       <PlantInfoCard plant={item} />
  //       <Favourite plant={item} />
  //     </Fragment>
  //   );
  // };

  const Content = styled(Text)`
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding-bottom: 10px;
  `;
  const ContentContainer = styled(View)`
    align-items: center;
    justify-content: center;
    height: 85%;
  `;

  const TitleFavourites = styled(Title)`
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-size: 40px;
    padding-top:40px;
  `;

  return favourites.length ? (
    <SafeArea>
      <BackgroundImage
        source={require("../../../assets/main_background--overlay.png")}
      >
        <TitleFavourites>Ulubione</TitleFavourites>
        <PlantsList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PlantDetail", {
                    plant: item,
                  })
                }
              >
                <PlantInfoCard plant={item} />
                <Favourite plant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </BackgroundImage>
    </SafeArea>
  ) : (
    <SafeArea>
      <BackgroundImage
        source={require("../../../assets/main_background--overlay.png")}
      >
        <TitleFavourites>Ulubione</TitleFavourites>
        <ContentContainer>
          <View>
            <Content>Nie masz jeszcze ulubionych roślin.</Content>
            <Content>Dodaj do ulubionych te najlepsze! :D</Content>
            <Button
              icon="arrow-right"
              onPress={() => navigation.navigate("Plants", search)}
              color="#000"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 40,
                backgroundColor: "#f4d16f",
                marginTop: 20,
              }}
              contentStyle={{ flexDirection: 'row-reverse' }}
            >
              Odkryj rośliny
            </Button>
          </View>
        </ContentContainer>
      </BackgroundImage>
    </SafeArea>
  );
};
