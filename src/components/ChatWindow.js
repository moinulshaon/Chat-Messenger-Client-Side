import React, {Component} from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ChatBox from "./ChatBox";
import ChatArea from "./ChatArea";

import {setUpWebSocket} from "../actions/socket";
import {onMessageReceived} from "../actions";

class ChatWindow extends Component {
    render() {
        const {classes, messages} = this.props;
        return (
            <div className={classes.chatWindow}>
                <ChatArea messages={messages} />
                <ChatBox />
            </div>
        );
    }

    newMessageReceived(payload) {
        this.props.onMessageReceived(payload);
    }
    componentDidUpdate(prvProps, prvState) {
        if (this.props.user!==null && this.props.user !== prvProps.user ) {
            setUpWebSocket(this.props.user, (payload) => this.newMessageReceived(payload));
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        messages: state.messages
    };
}

const styles = {
    chatWindow: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 1000,
    }
}
export default withStyles(styles)(connect(mapStateToProps, {onMessageReceived})(ChatWindow));