import React from 'react';
import { useSelector } from 'react-redux';
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
} from './styles';

import Background from '../../components/Background';

import Header from '../../components/Header';

export default function Cart({ navigation }) {
  const cart = useSelector(state => state.cart);

  return (
    <Background>
      <Container>
        <Header navigation={navigation} />
        <CartView>
          <CartList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductView>
                <Thumbnail source={item.image} />
                <InfoView>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </InfoView>
                <Icon name="delete-forever" size={20} color="#7159c1" />
              </ProductView>
            )}
          />
          <Footer>
            <TotalLabel>TOTAL</TotalLabel>
            <Total>$1800,00</Total>
          </Footer>
        </CartView>
      </Container>
    </Background>
  );
}
