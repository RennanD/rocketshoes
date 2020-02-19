import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./screens/Home";
import Cart from "./screens/Cart";

export default createAppContainer(
  createStackNavigator({
    Home,
    Cart
  })
);
