import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Filters = ({ todoesFilter, setTodoesFilter }) => {

  const handleAllTodoesFilter = () => {
    setTodoesFilter('all');
  }


  const handleActiveTodoesFilter = () => {
    setTodoesFilter('active');
  }


  const handleDoneTodoesFilter = () => {
    setTodoesFilter('done');
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAllTodoesFilter}>
        <Text
          style={
            todoesFilter === 'all' ? [styles.text, styles.active] : styles.text
          }>
          All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleActiveTodoesFilter}>
        <Text
          style={
            todoesFilter === 'active'
              ? [styles.text, styles.active]
              : styles.text
          }>
          Active
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDoneTodoesFilter}>
        <Text
          style={
            todoesFilter === 'done' ? [styles.text, styles.active] : styles.text
          }>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: 35,
    paddingVertical: 17,
    color: 'balck',
    backgroundColor: '#FFF',
    borderRadius: 27,
    marginHorizontal: 2,
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#e76048',
  },
});

export default Filters;
