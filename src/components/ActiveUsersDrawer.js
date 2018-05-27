import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChatAvatar from "./ChatAvatar";
import { connect } from "react-redux";
import { showActiveUsers, updateActiveUsers } from "../actions";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

class ActiveUsersDrawer extends Component {
    constructor(props) {
        super(props);
        this.visible = false;
    }

    renderActiveUsers(users) {
        const { classes } = this.props;
        return users.map(user => {
            return (
                <div className={classes.drawerElement}>
                    <ChatAvatar key={user.userId} avatarName={user.userName} />
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
        if (!this.visible) {
            this.props.updateActiveUsers();
        }
        this.visible = true;

        return (
            <Drawer
                className={classes.drawer}
                anchor="right"
                open={show}
                onClose={() => {
                    this.props.showActiveUsers(false);
                    this.visible = false;
                }}
            >
                {activeUsers == null || activeUsers.length === 0
                    ? this.renderLoadingIcon()
                    : this.renderActiveUsers(activeUsers)}
            </Drawer>
        );
    }
}

function mapStateToProps(state) {
    return {
        show: state.activeUsersShown,
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
    connect(mapStateToProps, { showActiveUsers, updateActiveUsers })(
        ActiveUsersDrawer
    )
);
