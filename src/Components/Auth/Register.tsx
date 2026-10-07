import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Surface, TextInput } from "react-native-paper";
import { AuthContext } from "../../Context/Auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStack } from "../../types/navigation";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { register, isAuthenticating } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProp<AuthStack>>();

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
        autoComplete="new-password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        loading={isAuthenticating}
        disabled={isAuthenticating}
        onPress={() => register(email, password)}
      >
        Cadastrar
      </Button>
      <Button onPress={() => navigation.navigate("Login")}>Já tenho uma conta</Button>
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

export default Register;
