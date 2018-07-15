import { connect } from "react-redux";
import Caption from "../components/Caption";

const mapStateToProps = ({ pinNumber }) => ({ pinNumber });

export default connect(
  mapStateToProps,
  null
)(Caption);
