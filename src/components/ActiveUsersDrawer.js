import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChatAvatar from "./ChatAvatar";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

class ActiveUsersDrawer extends Component {

    renderActiveUsers(users) {
        const { classes } = this.props;
        return users.map(user => {
            return (
                <div key={user.userId} className={classes.drawerElement}>
                    <ChatAvatar avatarName={user.userName} />
                </div>
            );
        });
    }
    renderLoadingIcon(users) {
        const { classes } = this.props;
        return (
            <div className={classes.drawerElement}>
                <CircularProgress />
            </div>
        );
    }
    render() {
        const { show, activeUsers, classes } = this.props;
        if (show !== true) {
            return "";
        }

        return (
            <Drawer
                className={classes.drawer}
                anchor="right"
                open={show}
                onClose={() => {
                    this.props.onClose();
                }}
            >
                {activeUsers == null
                    ? this.renderLoadingIcon()
                    : this.renderActiveUsers(activeUsers)}
            </Drawer>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeUsers: state.activeUsers
    };
}

const styles = {
    drawerElement: {
        width: 400,
        textAlign: "center"
    }
};

export default withStyles(styles)(
    connect(mapStateToProps)(
        ActiveUsersDrawer
    )
);
