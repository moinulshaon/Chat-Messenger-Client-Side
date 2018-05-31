import React from "react";
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const chatBox = ({classes}) => {
    return (
        <TextField
            id="chatBox"
            label="Type a message"
            multiline
            className={classes.textField}
            margin="normal"
        />
    );
}

const styles = {
    textField: {
        width: "100%"
    }
}

export default withStyles(styles)(chatBox);