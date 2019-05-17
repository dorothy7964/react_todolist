import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input : '',
    color : '#343a40',
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

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾기
    const index = todos.findIndex( todo => todo.id === id );

    const seleted = todos[index]; // 선택한 배열
    const nextTodos = [...todos]; // 배열 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...seleted,
      checked : !seleted.checked
    }

    this.setState({
      todos : nextTodos
    });
  }

  handleRemove = (id) =>{
    const { todos } = this.state;
    this.setState({
      todos : todos.filter( (todo) => todo.id !== id )
    });
  }

  render() {
    const { input, color, todos } = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return(
      <TodoListTemplate
        palette={(
          <Palette
            colors={colors}
            selected={color}
          />
        )}

        form={(
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
          />
      )}>

        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
         />
      </TodoListTemplate>
    );
  }
}

export default App;
