import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "../types/navigation";
import Config from "../Components/Config";
import Movies from "../Navigations/Movies";


const Tabs = createBottomTabNavigator<HomeStack>();

const Home = () => {
    return <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="Config" component={Config} />
    </Tabs.Navigator>
}

export default Home;