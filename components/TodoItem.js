import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const TodoItem = ({ todo, setTodoes }) => {
  const todoActive = todo.status === 'active' ? true : false;

  {
    /* change todo status */
  }
  const changeStatusHandler = ({ id }) => {
    setTodoes((todoes) => {
      todoes.map((todo) => {
        if (todo.id == id) {
          if (todo.status == 'active') {
            todo.status = 'done';
          } else {
            todo.status = 'active';
          }
        }
      });
      return [...todoes];
    });
  };

  return (
    <View style={styles.container}>
      <Text onPress={() => changeStatusHandler(todo)}>
        {todoActive ? (
          <Feather name="square" size={25} color="#FFF" />
        ) : (
          <Feather name="check-square" size={25} color="#e76048" />
        )}
      </Text>

      <Text style={todoActive ? styles.textActive : styles.textDone}>
        {todo.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
  },
  textDone: {
    color: '#e76048',
    fontSize: 20,
    textDecoration: 'line-through',
    marginHorizontal: 5,
  },
  textActive: {
    color: '#FFF',
    fontSize: 20,
    marginHorizontal: 5,
  },
});

export default TodoItem;
