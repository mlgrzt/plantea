import React, { useState } from "react";
// import { Searchbar } from "react-native-paper";
import { ImageBackground, View, Text, Image, Pressable } from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../components/utility/safe-area.component";
// import { Search } from "../components/search.component";
// import { PlantsScreen } from "../../features/screens/pla";

const SearchContainer = styled(View)`
  padding: 10px;
  z-index: 99;
`;

// const SearchBar = styled(Searchbar)`
//   border-radius: 25px;
//   font-size: 25px;
//   padding: 8px;
//   z-index: 999;
//   font-family: ${(props) => props.theme.fonts.body};
// `;
const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`;
const SearchTitle = styled(Text)`
  color: #fff;
  text-align: center;
  padding-top: 40%;
  font-size: 32px;
  padding-bottom: 10px;
`;
const SearchSubtitle = styled(Text)`
  color: #fff;
  text-align: center;
  padding-top: 18px;
  font-size: 18px;
`;
const ImageSearchBar = styled(Image)`
  height: 72px;
  width: 355px;
`;

export const PlantsSearchScreen = ({ navigation }) => {
  // const [search, setSearch] = useState("");
  const [search] = useState("");
  return (
    <SafeArea>
      <BackgroundImage
        source={require("../../../assets/main_background--overlay.png")}
      >
        <SearchTitle>Znajdź swoją roślinę...</SearchTitle>
        <SearchContainer>
          {/* <SearchBar
            placeholder="Wyszukaj roślinę"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={() => navigation.navigate("Plants", search)}
          /> */}
          <Pressable onPress={() => navigation.navigate("Plants", search)}>
            <ImageSearchBar source={require("../../../assets/SearchBar.png")} />
          </Pressable>
          <SearchSubtitle>...i dowiedz się jak o nią zadbac ♥</SearchSubtitle>
        </SearchContainer>
      </BackgroundImage>
    </SafeArea>
  );
};
