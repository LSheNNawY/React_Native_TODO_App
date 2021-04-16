import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Form({ setTodoes, todoes }) {
  const [text, setText] = React.useState('');

  const handleAdding = () => {
    if (text.trim() !== '') {

      setTodoes((todoes) => {
        return [
          {
            id: todoes.length + 1,
            title: text,
            status: 'active',
          },
          ...todoes,
        ];
      });

    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder="TODO..."
        style={styles.input}
        onChangeText={setText}
      />

      <Text onPress={handleAdding}>
        <AntDesign name="pluscircle" size={50} color="#e76048" />
      </Text>
    </View>
  );
}

const styles = {
  input: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 35,
    fontSize: 18,
    marginHorizontal: 10,
    flex: 1,
  },
};
