import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    secondName: '',
    licence: false,
    experience: 'Junior',
  };

  // Форма, используем вычисляемые свойство обьекта(например: const a='qwe'-Пишем: [a]:5-получаем {qwe:5}). Сделали универсальный метод, каждый инпут получает то что мы вводим
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  // для Сабмита формы делаем отдельный метод
  handleSubmit = e => {
    e.preventDefault();

    // Получаем данные из формы при сабмите
    this.props.giveMeData(this.state);

    // Вызываем метод reset для очистки формы после сабмита
    this.reset();
  };

  // метод для чекбокса
  handleLicence = e => {
    this.setState({ licence: e.currentTarget.checked });
  };
  // метод для очистки формы после сабмита
  reset = () => {
    this.setState({ name: '', secondName: '' });
  };

  render() {
    return (
      //  сабмит формы обьязательно надо вешать на саму форму
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Фамилия
          <input
            type="text"
            name="secondName"
            value={this.state.secondName}
            onChange={this.handleChange}
          />
        </label>

        {/* Делаем радио кнопки */}
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="Junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'Junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'Middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'Senior'}
          />
          Senior
        </label>
        <br />

        {/* делаем чекбокс */}
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicence}
          />
          Подтвердить условиe
        </label>

        {/* кнопка отправки формы. делаем ее неактивной если чекбокс не выбран через disabled */}
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}
export default Form;
