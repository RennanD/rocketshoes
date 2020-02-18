export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { product },
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
