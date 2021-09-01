import ShopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: null,
  selectedItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ShopActionsTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };

    case ShopActionsTypes.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: null,
      };
    default:
      return state;
  }
};

export default shopReducer;
