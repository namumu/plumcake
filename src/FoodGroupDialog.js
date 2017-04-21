import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class FoodGroupDialog extends React.Component {



  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const text = this.props.text;
    const modalText = this.props.modalText;

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title={text}}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {modalText}
        </Dialog>
      </div>
    );
  }
}

FoodGroupCard.propTypes = {
  text: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
};
