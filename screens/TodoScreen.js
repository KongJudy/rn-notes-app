import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Todos from '../components/Todos';

const TodoScreen = () => {
  const [todo, setTodo] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = () => {
    //after task is added, exits out the keyboard
    Keyboard.dismiss();
    setTodoItems([...todoItems, todo]);
    setTodo(null);
  };

  const deleteTodo = (index) => {
    let itemsCopy = [...todoItems];
    itemsCopy.splice(index, 1);
    setTodoItems(itemsCopy);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.wrapper}>
        <Text style={styles.todoTitle}>To Do's</Text>
        <View style={styles.items}>
          {todoItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteTodo(index)}>
                <Todos text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.todoEntryWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <View style={styles.addItem}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#f1ebdc'
  },
  wrapper: {
    paddingTop: 20,
    paddingLeft: 20
  },
  todoTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  todoEntryWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#c5c3c3',
    borderWidth: 1,
    width: 250
  },
  addItem: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c5c3c3',
    borderWidth: 1
  },
  addText: {
    fontSize: 24
  }
});
