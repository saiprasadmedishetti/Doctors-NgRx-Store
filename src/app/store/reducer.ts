import { Actions, ActionTypes } from './actions';
import { isNgTemplate } from '@angular/compiler';

export const initialState = [];

export function DoctorReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.Get:
      return state;

    case ActionTypes.Add:
      return action.payload.isFirst
        ? [action.payload, ...state]
        : [...state, action.payload];

    case ActionTypes.Update:
      console.log(action.payload);
      return [...state].map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return { ...item, name: action.payload.name };
      });

    case ActionTypes.Delete:
      return [...state].filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
