import { Alert } from 'react-native';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

import { formatPrice } from '../../../utils/format';

export function* addToCart({ payload }) {
  const { id } = payload;

  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Erro', 'Quantidade de estoque insuficiente.');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export function* updateAmout({ payload }) {
  const { id, amount } = payload;

  if (amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Erro', 'Quantidade de estoque insuficiente.');

    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmout),
]);