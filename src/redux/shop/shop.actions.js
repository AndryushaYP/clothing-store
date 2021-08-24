import ShopActionsTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collection) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});

export const fetchCollectionsFailure = (error) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});
