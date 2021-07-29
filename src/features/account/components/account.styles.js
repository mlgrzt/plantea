import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/main_background--overlay.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.button.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthButtonRegister = styled(Button).attrs({
  color: colors.button.secondary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-top: 20px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
export const Title = styled(Text)`
  font-size: 80px;
  color: #fff;
`;
export const Subtitle = styled(Text)`
  font-size: 50px;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
