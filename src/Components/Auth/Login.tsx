import { useContext, useState } from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import { AuthContext } from "../../Context/Auth";
import { StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStack } from "../../types/navigation";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login, isAuthenticating } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProp<AuthStack>>();

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Surface elevation={0} style={styles.container}>
      <TextInput
        label="E-mail"
        value={email}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        label="Senha"
        value={password}
        autoComplete="password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        mode="outlined"
        loading={isAuthenticating}
        disabled={isAuthenticating}
        onPress={() => login(email, password)}
      >
        Entrar
      </Button>

      <Button onPress={goToRegister}>
        Não tem conta? Cadastre-se
      </Button>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 10,
  },
});

export default Login;
