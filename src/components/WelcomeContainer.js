/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DateQuoteContainer from './DateQuoteContainer';
import Note from './Note';
import Habit from './Habit';


class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: '',
      quoteAuthor: '',
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
      .then((data) => {
        const { text, author } = data[0];
        this.setState({
          quoteText: text,
          quoteAuthor: author,
        });
      });

    fetch('/note')
      .then((data) => data.json())
      .then((data) => {
        const returnedNote = data[data.length - 1];
        this.setState({
          noteValue: returnedNote.notes,
        });
      });
  }

  // tear down the timer component
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // updates the state with new date whenever invoked
  tick() {
    this.setState({
      today: new Date(),
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      noteValue: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { noteValue } = this.state;
    fetch('/note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        note: noteValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const returnedNote = data[0];
        this.setState({
          noteValue: returnedNote.notes,
        });
      })
      .catch((error) => console.log(error));
  }


  render() {
    const {
      quoteText, quoteAuthor, today, noteValue,
    } = this.state;
    // console.log('noteValue: ', noteValue);
    return (
      <div className="welcomeContainer">
        <h1>Welcome User,</h1>
        <DateQuoteContainer
          quoteText={quoteText}
          quoteAuthor={quoteAuthor}
          today={today.toDateString()}
          time={today.toLocaleTimeString()}
        />
        <div className="middleContainer">
          <Note
            value={noteValue}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Habit />
        </div>
      </div>
    );
  }
}

export default WelcomeContainer;
