import React, { Component } from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {sendMessage} from '../actions/socket';


class chatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChangeValue(event) {
        this.setState({
            value: event.target.value
        });
    }
    onSubmit(e) {
        if (e.charCode === 13) {
            if (!e.shiftKey) {
                sendMessage(this.state.value, this.props.user);
                this.setState({
                    value: ''
                });
            } else {
                this.setState({
                    value: this.state.value + "\n"
                });
            }
            e.preventDefault();
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <TextField
                id="chatBox"
                label="Type a message"
                multiline
                className={classes.textField}
                margin="normal"
                rowsMax = "5"
                value= {this.state.value}
                onChange={(e)=> this.onChangeValue(e)}
                onKeyPress={(e)=> this.onSubmit(e)}
            />
        );
    }
}

const styles = {
    textField: {
        width: "100%"
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default withStyles(styles)(connect(mapStateToProps, {sendMessage})(chatBox));