import { useContext } from "react";
import { Button, Surface, Text } from "react-native-paper";
import { AuthContext } from "../Context/Auth";

const Config = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Surface
      elevation={0}
      style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10, gap: 4 }}
    >
      <Text>Email: {user?.email}</Text>
      <Button onPress={logout} mode="outlined">
        <Text>Logout</Text>
      </Button>
    </Surface>
  );
};

export default Config;
