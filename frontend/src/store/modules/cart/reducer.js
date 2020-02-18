export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST':
      return [...state, action.payload.product];
    default:
      return [];
  }
}
