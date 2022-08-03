import { CATEGORIRES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIRES_ACTION_TYPES.SET_CATEGORIRES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
