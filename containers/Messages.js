import { connect } from "react-redux";
import Messages from "../components/Messages";
import { toggleMessages, clearMessages } from "../actions/messages";

const mapStateToProps = ({ messages }) => ({ messages });

const mapDispatchToProps = dispatch => ({
  clearMessages: () => dispatch(clearMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
