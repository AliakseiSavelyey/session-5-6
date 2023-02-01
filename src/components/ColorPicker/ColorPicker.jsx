import React, { Component } from 'react';
// Библиотека classNames сейчас используется с scss, усли нужно использовать библиотеку с css-modules то смотреть документацию на сайте(пример: import classNames=require('classnames/bind') дальше по инструкции)
import classNames from 'classnames';
import './ColorPicker.scss';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  //Метод получает индекс кнопку(option) на которую нажимаем и просто кидает его в state
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    // Добавляем класс по условию с помощью БИБЛИОТЕКИ classNames(первым идет дефолтные стили(сколько угодно штук, потом в обьекте идут те которые нужно добавить, а потом условие при котором нужно добавить))
    return classNames('ColorPicker-option', {
      'ColorPicker-option-active': index === this.state.activeOptionIdx,
    });

    // Тут описано добавление класса по условию БЕЗ библиотеки classNames
    // const optionClasses = ['ColorPicker-option'];
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker-option-active');
    // }
    // return optionClasses.join(' ');
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
