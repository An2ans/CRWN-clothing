import {takeLatest, call, put, all} from "redux-saga/effects";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.js";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.actions";

import ShopActionTypes from "./shop.types";

//call es para llamar a los los diferentes   y put es como dispatch

export function* fetchCollectionsAsync(){
  yield console.log("I am fired");

  try{
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  }catch(error){
    yield put(fetchCollectionsFailure(error.message));
  }}


export function* fetchCollectionsStart(){
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}

export function* shopSagas(){
  yield all([call(fetchCollectionsStart)])
}
