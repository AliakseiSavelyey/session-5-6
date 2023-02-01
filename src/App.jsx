import React, { Component } from 'react';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialTodos from './data/todos.json';
import Form from 'components/Form';
import TodoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';
import shortid from 'shortid';

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
    filter: '',
  };

  addTodo = e => {
    const todo = {
      id: shortid.generate(),
      text: e,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
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

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    return this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Состояние компонента и Формы</h1>
        <h2>Как установить SASS пути в проекте</h2>
        <h2>Генерация Id элементов в форме</h2>
        <br />
        Ввод данных в инпут
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
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <TodoEditor onSubmit={this.addTodo} />
      </>
    );
  }
}

export default App;
