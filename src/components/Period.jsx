import React, { Component } from 'react';
import request from 'superagent';
import EventList from './EventList'

class Period extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
  handleClick(newEvent) {
    this.setState({events:[...this.state.events, newEvent]})
  }
  render(props) {
    return (
      <div>
        <EventList />
      </div>
    )
  }
}

export default Period;