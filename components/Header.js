import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        BABY SHARK
      </Text>

      <Text style={styles.paragraph}>
        <Text style={[styles.paragraphHead, [styles.paragraphHead]]}>TODO</Text>-dodoodddoooooo
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    margin: 20,
    marginTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e76048'
  },

  paragraph: {
    margin: 25,
    marginTop: 0,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF'
  },

  paragraphHead: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});