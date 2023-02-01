import React, { Component } from 'react';
import Controls from './Controls';
import './Counter.scss';

class Counter extends Component {
  // передает статический началбный пропс:
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};

  // публичное свойство state:
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // если нужно обновить(просто записать новое значение) состояние при каком либо событии(например клике)
    // this.setState({
    //   value: 10,
    // });

    // Если нужно изменить состояние от предыдущего(например: прибавить к старому значению)
    this.setState(el => {
      return { value: el.value + 1 };
    });
  };

  handleDecrement = () => {
    // Если нужно изменить состояние от предыдущего(например: прибавить к старому значению)
    this.setState(el => {
      return { value: el.value - 1 };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter-value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
