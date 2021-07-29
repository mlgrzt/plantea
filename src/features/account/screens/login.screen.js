import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentitaction/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <Title>.plantea</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Zaloguj się
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Powrót
      </AuthButton>
    </AccountBackground>
  );
};
