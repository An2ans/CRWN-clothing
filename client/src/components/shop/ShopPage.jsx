import React, {useEffect, lazy, Suspense} from 'react';
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions.js";
import Spinner from "../spinner/spinner.component";


const CollectionPageContainer = lazy(() => import("../collection-page/collection-page.container.jsx"));
const CollectionsOverviewContainer = lazy(() => import("../collections-overview/collections-overview.container.jsx"));

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  },[dispatch]);

  return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />} >
          <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </Suspense>
      </div>
  );
};


export default ShopPage;
