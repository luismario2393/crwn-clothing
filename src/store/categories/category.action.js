import { CATEGORIRES_ACTION_TYPES } from "./category.types";
import { createActions } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () =>
  createActions(CATEGORIRES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createActions(
    CATEGORIRES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createActions(CATEGORIRES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
