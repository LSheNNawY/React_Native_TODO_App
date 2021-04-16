import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

import Header from './components/Header';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import Filters from './components/Filters';

export default function App() {
  const [todoes, setTodoes] = React.useState([]);
  const [todoesFilter, setTodoesFilter] = React.useState('all');

  return (
    <View style={styles.container}>
      <Header />

      <Form setTodoes={setTodoes} todoes={todoes} />

      <Filters todoesFilter={todoesFilter} setTodoesFilter={setTodoesFilter} />

      <View>
        <FlatList
          data={todoes}
          renderItem={({ item }) => {
            if (todoesFilter === 'active') {
              return (
                <View>
                  {item.status === 'active' ? (
                    <TodoItem setTodoes={setTodoes} todo={item} />
                  ) : null}
                </View>
              );
            }

            if (todoesFilter === 'all') {
              return (
                <View>
                  <TodoItem setTodoes={setTodoes} todo={item} />
                </View>
              );
            }

            if (todoesFilter === 'done') {
              return (
                <View>
                  {item.status === 'done' ? (
                    <TodoItem setTodoes={setTodoes} todo={item} />
                  ) : null}
                </View>
              );
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0e0821',
    padding: 8,
  },
});
