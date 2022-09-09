import { Snackbar } from "react-native-paper";
import globalStyles from "../globals/styles";

const ValidationBar = ({ cartValidation, _handleOnClose }) =>
    cartValidation && (
        <Snackbar
            duration={500}
            visible={cartValidation && true}
            onDismiss={_handleOnClose}
            style={globalStyles.snackbar}
        >
            {cartValidation}
        </Snackbar>
    );

export default ValidationBar;
