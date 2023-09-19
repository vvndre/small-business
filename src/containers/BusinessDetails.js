//create a container for specific component to link up to redux

import { connect } from "react-redux";
import BusinessDetails from "../components/BusinessDetails";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(BusinessDetails);
