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

  render() {
    const { todos } = this.state;

    return(
      <TodoListTemplate form={(
          <Form />

      )}>
        <TodoItemList
          todos={todos}
         />
      </TodoListTemplate>
    );
  }
}

export default App;
