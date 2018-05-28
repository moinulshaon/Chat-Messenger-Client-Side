import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { setUser } from '../actions';

class UserDialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      nameFieldValue: ""
    };
  }

  handleSubmit() {
    if (this.state.nameFieldValue===null || this.state.nameFieldValue.length === 0) {
        return;
    }
    this.props.setUser(this.state.nameFieldValue);
    this.setState({ open: false });
  }

  handleChange(event) {
    this.setState({
        nameFieldValue: event.target.value
    });
  }

  handleKeyPress(event) {
      if (event.key === 'Enter') {
          this.handleSubmit();
      }
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Who are you?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To use to this website, please enter your name.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              onChange={(event)=>this.handleChange(event)}
              onKeyPress={e=>this.handleKeyPress(e)}
              value={this.state.nameFieldValue}
              fullWidth
            />
            <DialogActions>
              <Button onClick={()=>this.handleSubmit()}color="primary">Enter</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const styles = {};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withStyles(styles)(connect(mapStateToProps, {setUser})(UserDialogue));
