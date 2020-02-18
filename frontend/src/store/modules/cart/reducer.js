import { produce } from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_REQUEST': {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.product.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.payload.product, amount: 1 });
        }
      }
    }
  });
}
