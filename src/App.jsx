import React, { Component } from 'react';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialTodos from './data/todos.json';
import Form from 'components/Form';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // Ввод данных в инпут
  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  // Метод для пропса Формы, что бы получить данные
  formSubmitHandler = e => {
    console.log(e);
  };
  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <h1>Состояние компонента и Формы</h1>
        <h2>Как установить SASS пути в проекте</h2>
        <h2>Генерация Id элементов в форме</h2>
        <br />

        {/* Ввод данных в инпут */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>

        <Form giveMeData={this.formSubmitHandler} />

        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее кол-во:{todos.length}</p>
          <p>Кол-во выполненых:{completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
