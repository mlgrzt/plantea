import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentitaction/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItem = styled(List.Item)`
  padding: 4px;
`;
const AvatarContainer = styled.View`
  align-items: center;
  padding-bottom: 30px;
  padding-top: 20px;
`;
const AvatarImage = styled(Avatar.Image)`
  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0 1px 3px black;
  margin-bottom: 15px;
`;
const TransparentSafeArea = styled(SafeArea)`
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/main_background--overlay-light.png"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <AvatarImage
            size={120}
            source={require("../../../../assets/plant_avatar.jpeg")}
          />
          <Text variant="label">{user.email}</Text>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Wyloguj się"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
          <SettingsItem
            title="Pomoc"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="help-circle-outline"
              />
            )}
            onPress={() => null}
          />
          <SettingsItem
            title="Daj nam Feedback!"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="pencil" />
            )}
            onPress={() => null}
          />
          <SettingsItem
            title="Oceń nas w AppStore"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="star" />
            )}
            onPress={() => null}
          />
          <SettingsItem
            title="Udostępnij aplikacje"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="share-outline"
              />
            )}
            onPress={() => null}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
