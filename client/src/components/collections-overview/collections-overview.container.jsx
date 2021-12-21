import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors.js";
import {compose} from "redux";
import WithSpinner from "../with-spinner/with-spinner.component.jsx";
import CollectionsOverview from "./collections-overview.jsx";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
