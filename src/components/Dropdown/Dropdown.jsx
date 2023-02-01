import React, { Component } from 'react';
import './Dropdown.scss';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  // Методы которые вешаем на кнопки, они показывают\скрывают модалку
  // show = () => {
  //   this.setState({ visible: true });
  // };
  // hide = () => {
  //   this.setState({ visible: false });
  // };

  // Метод toggle который одной кнопкой показывает или скрывает модалку
  toogle = () => {
    this.setState(el => ({
      visible: !el.visible,
    }));
  };

  // Метод для рендера в классе(class) такой метод может быть только один в классе
  render() {
    return (
      <div className="Dropdown">
        {/* Это кнопки для методов show и hide которые показывают или скрывают модалку */}
        {/* <button type="button" className="Dropdown-toggle" onClick={this.show}>
          Показать
        </button>
        <button type="button" className="Dropdown-toggle" onClick={this.hide}>
          Скрыть
        </button> */}

        {/* это кнопка для метода toggle который скрывает или показывает модалку */}
        <button type="button" className="Dropdown-toggle" onClick={this.toogle}>
          {this.state.visible ? 'скрыть' : 'показать'}
        </button>

        {/*Рендерим по условию */}
        {this.state.visible && (
          <div className="Dropdown-menu">Выпадающее Меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
