/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DateQuoteContainer from './DateQuoteContainer';
import Note from './Note';


class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      today: new Date(),
      noteValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // invoke the tick function every second to set the time counting
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

    fetch('/quote')
      .then((data) => data.json())
      .then((data) => console.log('quote: ', data));
  }

  // tear down the timer component
  componentWillUnmount() {
    clearInterval();
  }

  // updates the state with new date whenever invoked
  tick() {
    this.setState({
      today: new Date(),
    });
  }

  handleChange(event) {
    this.setState({
      noteValue: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`A note was submitted: ${this.state.note}`);
    event.preventDefault();
  }


  render() {
    const { quote, today, noteValue } = this.state;
    return (
      <div>
        <h1>Welcome User,</h1>
        <DateQuoteContainer
          dailyQuote={quote}
          today={today.toDateString()}
          time={today.toLocaleTimeString()}
        />
        <Note
          value={noteValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default WelcomeContainer;
