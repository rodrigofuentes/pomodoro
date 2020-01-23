/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import HabitItem from './HabitItem';

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habit: '',
      allHabits: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
  }

  componentDidMount() {
    fetch('/habit')
      .then((response) => response.json())
      .then((data) => this.setState({
        allHabits: data,
      }));
  }


  deleteHabit(event) {
    event.preventDefault();
    const { id } = event.target;
    const { allHabits } = this.state;
    fetch('/habit', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => (response.json()))
      .then((data) => {
        const deletedHabit = data[0];
        this.setState({
          allHabits: allHabits.filter((h) => h.id !== deletedHabit.id),
        });
      })
      .catch((error) => console.log(error));
  }

  handleInput(event) {
    const { value } = event.target;
    this.setState({
      habit: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { habit, allHabits } = this.state;
    fetch('/habit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        habit,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const newHabit = data[0];
        this.setState({
          allHabits: allHabits.concat(newHabit),
          habit: '',
        });
      })
      .catch((error) => console.log(error));
  }


  render() {
    const { habit, allHabits } = this.state;
    const habits = [];
    for (let i = 0; i < allHabits.length; i += 1) {
      habits.push(<HabitItem habitText={allHabits[i].habit} habitDate={allHabits[i].date} key={i.toString()} id={allHabits[i].id} deleteHabit={this.deleteHabit} />);
    }

    return (
      <div className="habitTracker">
        <h3 className="habitsHeader">Habit Tracker</h3>
        <input type="text" placeholder="Enter a habit to track..." name="habit" value={habit} onChange={this.handleInput} />
        <input type="submit" value="Add Habit" onClick={this.handleSubmit} />
        {/* <HabitItem habitItem={habit} /> */}
        {habits}
      </div>
    );
  }
}

export default Habit;
