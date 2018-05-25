import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const chatAvatar = ({ avatarName, classes }) => {
  return (
    <div className={classes.chatAvatar}>
      <Avatar className={classes.avatarIcon}>{avatarName.substring(0, 1).toUpperCase()}</Avatar>
      <div className={classes.avatarText}>
        <div className={classes.avatarMainTextContent}>
           {avatarName}
        </div>
        <div className={classes.avatarSubTextContent}>
            {avatarName}
        </div>
      </div>
    </div>
  );
};

const styles = {
    chatAvatar: {
      display: "flex",
      height: 40,
      overflow: "hidden",
      textOverflow: "ellipsis",
      alignItems: "center",
      padding: 5,
      margin: 2,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "grey",
      backgroundColor: "gainsboro",
      cursor: "pointer"
    },
    avatarIcon: {
      backgroundColor: "green"
    },
    avatarText: {
      flexDirection: "column",
      marginLeft: 10
    },
    avatarMainTextContent: {
      fontSize: 18
    },
    avatarSubTextContent: {
      fontSize: 14,
      color: "grey"
    }
  };
  

export default withStyles(styles)(chatAvatar);
