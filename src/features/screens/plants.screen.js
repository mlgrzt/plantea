import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import {
  FlatList,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { PlantInfoCard } from "../components/plant-info-card.component";
import { PlantsContext } from "../../services/plants/plants.context";
import { ActivityIndicator, Colors } from "react-native-paper";

export const PlantsScreen = ({ navigation, route }) => {
  const { isLoading, plants } = useContext(PlantsContext);
  const initSearchText = route.params;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(initSearchText);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("PlantsDetail", { plant: item })}
    >
      <PlantInfoCard plant={item} />
    </TouchableOpacity>
  );

  useEffect(() => {
    searchHandler(search);
  }, [initSearchText]);

  const searchHandler = (text) => {
    setSearch(text);
    if (text === "") {
      setData(plants);
    } else {
      setData(
        plants.filter(
          (e) => e.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        )
      );
    }
  };

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <BackgroundImage
        source={require("../../../assets/main_background--overlay.png")}
      >
        <SearchContainer>
          <SearchBar
            placeholder="Wyszukaj roślinę"
            onChangeText={searchHandler}
            value={search}
            autoFocus
          />
        </SearchContainer>
        <PlantsList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </BackgroundImage>
    </SafeArea>
  );
};

const SearchContainer = styled(View)`
  padding: 10px;
  z-index: 99;
`;
const SearchBar = styled(Searchbar)`
  border-radius: 25px;
  font-size: 25px;
  padding: 8px;
  z-index: 999;
  font-family: ${(props) => props.theme.fonts.body};
`;
const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`;
const PlantsList = styled(FlatList)`
  padding: 10px;
  padding-top: 60px;
  margin-top: -50px;
  background-color: #f3f0f0ba;
  flex: 1;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
`;
