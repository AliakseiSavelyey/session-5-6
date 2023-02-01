import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  //Метод получает индекс кнопку(option) на которую нажимаем и просто кидает его в state
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker-option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker-option-active');
    }
    return optionClasses.join(' ');
  };

  render() {
    // Деструктуризируем что бы убрать this.state и this.proprs что бы разметка была чище
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    // с помощью индекса берем label у активной кнопки и выводим в параграфе(это называется вычисляемое свойство на базе пропов и state)
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker-title">Color Picker</h2>
        <p>Выбрать цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              // Передаем ссылку на функцию в onClick, index доступен через замыкание
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
