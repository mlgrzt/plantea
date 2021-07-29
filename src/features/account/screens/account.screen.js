import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthButtonRegister,
  Title,
  Subtitle,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Title>.plantea</Title>
      <Subtitle>keep calm and love plants</Subtitle>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Zaloguj się
        </AuthButton>
        <AuthButtonRegister
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Zarejestruj się
        </AuthButtonRegister>
      </AccountContainer>
    </AccountBackground>
  );
};
