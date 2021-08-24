import { call, put, takeLatest, all } from "@redux-saga/core/effects";
import ShopActionsTypes from "./shop.types";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

import { firestore, convertCollections } from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollections, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
