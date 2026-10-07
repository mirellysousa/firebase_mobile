import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/Context/Auth";
import Index from "./src/Screens/Index";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </NavigationContainer>
  );
}
