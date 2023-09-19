import { connect } from "react-redux";
import Login from "../components/Login";
import { updateUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (username) => dispatch(updateUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
