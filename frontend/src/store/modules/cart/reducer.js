import { produce } from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.product.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.payload.product, amount: 1 });
        }

        break;
      }

      case '@cart/UPDATE': {
        if (action.payload.amount <= 0) return;

        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }

        break;
      }

      case '@cart/REMOVE': {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
        break;
      }

      default:
    }
  });
}
