import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Logo, CartButton, Badge, BadgeText } from "./styles";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <CartButton>
        <Icon name="shopping-basket" size={36} color="#fff" />
        <Badge>
          <BadgeText>1</BadgeText>
        </Badge>
      </CartButton>
    </Container>
  );
}
