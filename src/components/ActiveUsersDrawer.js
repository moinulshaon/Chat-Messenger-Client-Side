import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChatAvatar from "./ChatAvatar";
import { connect } from "react-redux";
import { showActiveUsers } from "../actions";
import { withStyles } from "@material-ui/core/styles";

class ActiveUsersDrawer extends Component {
    renderActiveUsers(users) {
        const { classes } = this.props;
        return users.map(user => {
            return (
                <div className={classes.drawerElement}>
                    <ChatAvatar key={user} avatarName={user} />
                </div>
            );
        });
    }
    render() {
        const { show, activeUsers, classes } = this.props;
        if (!activeUsers) {
            return "";
        }

        return (
            <Drawer
                className={classes.drawer}
                anchor="right"
                open={show}
                onClose={() => this.props.showActiveUsers(false)}
            >
                {this.renderActiveUsers(activeUsers)}
            </Drawer>
        );
    }
}

function mapStateToProps(state) {
    return {
        show: state.showActiveUsers.show,
        activeUsers: state.showActiveUsers.activeUsers
    };
}

const styles = {
    drawerElement: {
        width: 400
    }
};

export default withStyles(styles)(
    connect(mapStateToProps, { showActiveUsers })(ActiveUsersDrawer)
);
