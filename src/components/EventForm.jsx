import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Request from 'superagent';
import React, { Component } from 'react';
import AUTH_URL from '../server/server';
const selectionValue = 2;

injectTapEventPlugin();

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      playerName: '',
      type: '',
      result: '',
      zone: '',
      time: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleOpen() {
    this.setState(() => ({ open: true }));
  }

  handleClose() {
    this.setState(() => ({ open: false }));
  }

  updateField(field, value) {
    this.setState(() => ({ [field]: value }));
  }


  handleSubmit() {
    Request
      .post(`${AUTH_URL}game/:id`)
      .send(this.state)
      .end((err, res) => {
        this.handleClose();
      });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Add"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Button
          label="Add Event" 
          onClick={this.handleOpen}
          secondary
          style={{
            marginLeft: '58%',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        />
        <Dialog
          title="Add Event"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleSubmit}
        >
          <div className="event-form">
            <TextField
              hintText="enter player name"
              onChange={event => this.updateField('playerName', event.target.value)}
            />
            <SelectField
              hintText="Event Type"
              value={this.state.type}
              onChange={(...event) => this.updateField('type', event[selectionValue])}
            >
              <MenuItem value="Shot" primaryText="Shot" />
              <MenuItem value="Pass" primaryText="Pass" />
              <MenuItem value="Hit" primaryText="Hit" />
            </SelectField>
            <SelectField
              hintText="Event Result"
              value={this.state.result}
              onChange={(...event) => this.updateField('result', event[selectionValue])}
            >
              <MenuItem value="Goal" primaryText="Goal" />
              <MenuItem vlaue="Save" primaryText="Save" />
              <MenuItem value="Zone Exit" primaryText="Zone Exit" />
              <MenuItem value="Turn Over" primaryText="Turn Over" />
            </SelectField>
            <SelectField
              hintText="Zone"
              value={this.state.zone}
              onChange={(...event) => this.updateField('zone', event[selectionValue])}
            >
              <MenuItem value="AZ C-Point" primaryText="AZ C-Point" />
              <MenuItem value="AZ R-Point" primaryText="AZ R-Point" />
              <MenuItem value="AZ L-Point" primaryText="AZ L-Point" />
              <MenuItem value="AZ High Slot" primaryText="AZ High Slot" />
              <MenuItem value="AZ R High Slot" primaryText="AZ R High Slot" />
              <MenuItem value="AZ Left High Slot" primaryText="AZ Left High Slot" />
              <MenuItem value="AZ Slot" primaryText="AZ Slot" />
              <MenuItem value="AZ Low-Slot" primaryText="AZ Low-Slot" />
            </SelectField>
            <TextField
              hintText="Event Time"
              value={this.state.time}
              onChange={event => this.updateField('time', event.target.value)}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default EventForm;
