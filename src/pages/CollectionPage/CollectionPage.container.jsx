import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CollectionPage from "./CollectionPage.component";
import WithSpinner from "../../components/HOC/WithSpinner/WithSpinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);
export default CollectionPageContainer;
