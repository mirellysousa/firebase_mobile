import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MoviesStack } from "../types/navigation";
import List from "../Components/Movies/List";
import Details from "../Components/Movies/Details";

const Stack = createNativeStackNavigator<MoviesStack>();

const Movies = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Movies;
