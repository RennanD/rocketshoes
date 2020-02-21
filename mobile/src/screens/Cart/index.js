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
  ActionView,
  AmountProduct,
  Subtotal,
  SubtotalView,
  Hr,
} from './styles';

import Background from '../../components/Background';

import Header from '../../components/Header';

import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      subtotal: formatPrice(p.price * p.amount),
    }))
  );
  const cartSize = useSelector(state => state.cart.length);

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  function increment(product) {
    const { id, amount } = product;

    dispatch(updateAmountRequest(id, amount + 1));
  }

  function decrement(product) {
    const { id, amount } = product;

    dispatch(updateAmountRequest(id, amount - 1));
  }

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
                <>
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
                  <SubtotalView>
                    <ActionView>
                      <TouchableOpacity onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </TouchableOpacity>
                      <AmountProduct
                        editable={false}
                        value={String(item.amount)}
                      />
                      <TouchableOpacity onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </TouchableOpacity>
                    </ActionView>
                    <Subtotal>{item.subtotal}</Subtotal>
                  </SubtotalView>

                  <Hr />
                </>
              )}
            />
            <Footer>
              <TotalLabel>TOTAL</TotalLabel>
              <Total>{total}</Total>
            </Footer>
          </CartView>
        )}
      </Container>
    </Background>
  );
}
