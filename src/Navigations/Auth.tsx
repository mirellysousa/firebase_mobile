import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "../types/navigation";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";

const Stack = createNativeStackNavigator<AuthStack>();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Auth;
