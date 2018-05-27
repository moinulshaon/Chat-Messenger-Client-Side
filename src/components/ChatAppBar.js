import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import { showActiveUsers } from "../actions";

class ChatAppBar extends Component {
    render() {
        const { user, classes, showActiveUsers } = this.props;
        return (
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.content}
                    >
                        {user}
                    </Typography>

                    <IconButton
                        className={classes.activeUsersButton}
                        color="inherit"
                        aria-label="activeUserButton"
                        onClick={() => showActiveUsers(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

const styles = {
    AppBar: {
        flex: 1,
        flexGrow: 1
    },
    Content: {
        flex: 1
    },
    activeUsersButton: {
        marginLeft: "auto"
    }
};

export default withStyles(styles)(
    connect(mapStateToProps, { showActiveUsers })(ChatAppBar)
);
