import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import { firestore, convertCollections } from "../../firebase/firebase.utils";

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collections = convertCollections(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
