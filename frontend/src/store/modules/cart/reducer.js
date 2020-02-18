const INITIAL_STATE = [
  {
    product: {},
    amount: null,
  },
];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST':
      return [...state, { product: action.payload.product, amount: 1 }];
    default:
      return [];
  }
}
