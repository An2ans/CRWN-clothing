import React from 'react';
import CollectionsOverview from "../collections-overview/collections-overview.jsx";
import {Route} from "react-router-dom";
import CollectionPage from "../collection-page/collection-page.jsx";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.js";
import {connect} from "react-redux";
import {updateCollections} from "../../redux/shop/shop.actions.js";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

        </div>

    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);
