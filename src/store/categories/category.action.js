import { CATEGORIRES_ACTION_TYPES } from "./category.types";
import { createActions } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMap) =>
  createActions(CATEGORIRES_ACTION_TYPES.SET_CATEGORIRES_MAP, categoriesMap);
