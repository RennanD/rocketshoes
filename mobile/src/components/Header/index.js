import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Logo, CartButton, Badge, BadgeText } from "./styles";

import logo from "../../assets/logo.png";

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Logo source={logo} />
      </TouchableOpacity>
      <CartButton onPress={() => navigation.navigate("Cart")}>
        <Icon name="shopping-basket" size={36} color="#fff" />
        <Badge>
          <BadgeText>1</BadgeText>
        </Badge>
      </CartButton>
    </Container>
  );
}
