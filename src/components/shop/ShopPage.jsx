import React from 'react';
import CollectionsOverviewContainer from "../collections-overview/collections-overview.container.jsx";
import {Route} from "react-router-dom";
import CollectionPageContainer from "../collection-page/collection-page.container.jsx";
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions.js";


class ShopPage extends React.Component {

  componentDidMount(){
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render(){
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);
