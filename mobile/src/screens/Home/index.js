import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductList,
  ProductImage,
  Title,
  Price,
  Button,
  ButtonText,
  Card,
  AmoutView,
  Amout,
} from './styles';

import Background from '../../components/Background';

import Header from '../../components/Header';

import api from '../../services/api';

import { formatPrice } from '../../utils/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Background>
      <Container>
        <Header navigation={navigation} />
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Card>
              <ProductImage source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <Button onPress={() => dispatch(addToCartRequest(item.id))}>
                <AmoutView>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <Amout>{amount[item.id] || 0}</Amout>
                </AmoutView>
                <ButtonText>Adicionar ao carrinho</ButtonText>
              </Button>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
