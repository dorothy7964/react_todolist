import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input : '',
    todos: [
      { id: 0, text: ' 리액트 소개1', checked: false },
      { id: 1, text: ' 리액트 소개2', checked: true },
      { id: 2, text: ' 리액트 소개3', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = () => {
    const { input,todos } = this.state;
    this.setState({
      input : '',
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  render() {
    const { input, todos } = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
    } = this;

    return(
      <TodoListTemplate form={(
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
          />
      )}>

        <TodoItemList
          todos={todos}
         />
      </TodoListTemplate>
    );
  }
}

export default App;
