import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartList,
  CartView,
  ProductView,
  Thumbnail,
  InfoView,
  Title,
  Price,
  Footer,
  TotalLabel,
  Total,
  Empty,
  EmptyText,
} from './styles';

import Background from '../../components/Background';

import Header from '../../components/Header';

import { removeFromCart } from '../../store/modules/cart/actions';

export default function Cart({ navigation }) {
  const cart = useSelector(state => state.cart);
  const cartSize = useSelector(state => state.cart.length);

  const dispatch = useDispatch();

  return (
    <Background>
      <Container>
        <Header navigation={navigation} />
        {cartSize <= 0 ? (
          <CartView>
            <Empty>
              <Icon name="remove-shopping-cart" size={40} color="#ddd" />
              <EmptyText>Ops, carrinho vazio</EmptyText>
            </Empty>
          </CartView>
        ) : (
          <CartView>
            <CartList
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <ProductView>
                  <Thumbnail source={{ uri: item.image }} />
                  <InfoView>
                    <Title>{item.title}</Title>
                    <Price>{item.priceFormatted}</Price>
                  </InfoView>
                  <TouchableOpacity
                    onPress={() => dispatch(removeFromCart(item.id))}
                  >
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </TouchableOpacity>
                </ProductView>
              )}
            />
            <Footer>
              <TotalLabel>TOTAL</TotalLabel>
              <Total>$1800,00</Total>
            </Footer>
          </CartView>
        )}
      </Container>
    </Background>
  );
}
