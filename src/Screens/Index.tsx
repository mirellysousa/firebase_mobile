import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import Auth from "../Navigations/Auth";
import Home from "./Home";

const Index = () => {
  const { user } = useContext(AuthContext);
  return !user ? <Auth /> : <Home />;
};

export default Index;
