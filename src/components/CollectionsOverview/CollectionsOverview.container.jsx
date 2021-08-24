import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../HOC/WithSpinner/WithSpinner.component";
import CollectionsOverview from "./CollectionsOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
