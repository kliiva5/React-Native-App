/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import FetchTodo from './components/FetchTodo';
import NewTodo from './components/NewTodo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    addTodoVisible: false,
    userTodos: [],
    description: ''
  }

  handleDescriptionChange = (description) => {
    this.setState({
      description: description
    });
    console.log(this.state.description);
  }
  
  showNewTodoForm = () => {
    this.setState({
      addTodoVisible: true
    });
  }

  createNewTodo = () => {
    fetch('https://react-native-3483f.firebaseio.com/todos.json', {
      method: 'POST',
      body: JSON.stringify({
        description: this.state.description
      })
    })
    .then(res => {
      console.log(res);
      this.setState({
        description: ''
      });
    })
    .catch(err => {
      this.setState({
        description: ''
      });
    });
  }

  deleteUserTodosHandler = () => {
    fetch('https://react-native-3483f.firebaseio.com/todos.json', {
      method: 'DELETE'
    })
     .then(() => {
       this.setState({
         userTodos: []
       })
     })
  }

  getUserTodosHandler = () => {
    fetch('https://react-native-3483f.firebaseio.com/todos.json')
     .then(res => res.json())
     .then(parsedResponse => {
       console.log(parsedResponse);
       const todos = [];
       for (const key in parsedResponse) {
         todos.push({
           description: parsedResponse[key].description,
           id: key
         });
       }
       console.log(todos);
       this.setState({
         userTodos: todos
       });
     })
     .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchTodo getTodos={this.getUserTodosHandler} />
        <NewTodo
         isVisible={this.state.addTodoVisible}
         description={this.state.description}
         handleDescriptionChange={this.handleDescriptionChange}
         handleNewTodoCreation={this.createNewTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
