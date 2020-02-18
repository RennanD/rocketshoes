export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { id },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { product },
  };
}

export function addToCartFailure() {
  return {
    type: '@cart/ADD_FAILURE',
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: { id },
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE',
    payload: { id, amount },
  };
}
