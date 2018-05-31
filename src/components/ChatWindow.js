import React, {Component} from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ChatBox from "./ChatBox";
import ChatArea from "./ChatArea";

class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    render() {
        const {classes} = this.props;
        const {messages} = this.state;
        return (
            <div className={classes.chatWindow}>
                <ChatArea messages={messages} />
                <ChatBox />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {

    };
}

const styles = {
    chatWindow: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 1000
    }
}
export default withStyles(styles)(connect(mapStateToProps)(ChatWindow));