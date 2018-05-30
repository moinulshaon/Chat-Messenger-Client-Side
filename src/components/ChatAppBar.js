import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ActiveUsersDrawer from "./ActiveUsersDrawer";
import { updateActiveUsers } from "../actions";

class ChatAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUserShown: false
        }
    }

    openActiveUsersDrawer() {
        this.setState({
            activeUserShown: true
        });
        this.props.updateActiveUsers();
    }

    closeActiveUsersDrawer() {
        this.setState({
            activeUserShown: false
        });
    }

    render() {
        const { user, classes } = this.props;
        return (
            <div>
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
                            onClick={() => this.openActiveUsersDrawer()}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <ActiveUsersDrawer show={this.state.activeUserShown} onClose={()=>this.closeActiveUsersDrawer()}/>
            </div>
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
    connect(mapStateToProps, { updateActiveUsers })(ChatAppBar)
);
