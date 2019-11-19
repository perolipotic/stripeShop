import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  /*   collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(err => dispatch(fetchCollectionsFailure(err.message))); */
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
