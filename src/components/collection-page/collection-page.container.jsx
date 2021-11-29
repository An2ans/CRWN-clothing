import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors.js";
import {compose} from "redux";
import WithSpinner from "../with-spinner/with-spinner.component.jsx";
import CollectionPage from "./collection-page.jsx";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
