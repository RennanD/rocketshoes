import { produce } from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        draft.push(action.payload.product);

        break;
      }

      case '@cart/UPDATE_SUCCESS': {
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
