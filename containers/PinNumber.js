import { connect } from "react-redux";
import PinNumber from "../components/PinNumber";
import { savePinNumber } from "../actions/pinNumber";
import { toggleMessages } from "../actions/messages";

const mapStateToProps = ({ pinNumber }) => ({ pinNumber });

const mapDispatchToProps = dispatch => ({
  savePinNumber: data => dispatch(savePinNumber(data)),
  toggleMessages: data => dispatch(toggleMessages(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinNumber);
