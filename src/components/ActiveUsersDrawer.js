import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChatAvatar from "./ChatAvatar";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class ActiveUsersDrawer extends Component {

    renderActiveUsers(users) {
        const { classes } = this.props;
        return users.map(user => {
            return (
                <div key={user.userId}>
                    <ListItem button>
                        <div  className={classes.drawerElement}>
                            <ChatAvatar avatarName={user.userName} />
                        </div>
                    </ListItem>  
                    <Divider />
                </div>
            );
        });
    }
    renderLoadingIcon(users) {
        const { classes } = this.props;
        return (
            <div className={[classes.drawerElement].join(' ')}>
                <CircularProgress className={classes.loadingIcon}/>
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
            <List>
                {activeUsers == null
                    ? this.renderLoadingIcon()
                    : this.renderActiveUsers(activeUsers)}
                    </List>
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
        width: 400
    },
    loadingIcon: {
        position: 'absolute',
        top: '50%',
        left: '45%'
    }
};

export default withStyles(styles)(
    connect(mapStateToProps)(
        ActiveUsersDrawer
    )
);
