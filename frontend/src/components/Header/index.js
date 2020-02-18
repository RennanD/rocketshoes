import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Badge, BadgeView } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocktshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
        </div>
        <BadgeView>
          {!!cartSize && <Badge>{cartSize}</Badge>}
          <MdShoppingBasket size={36} color="#fff" />
        </BadgeView>
      </Cart>
    </Container>
  );
}
