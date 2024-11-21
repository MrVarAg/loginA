import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignIn from './src/screens/login'; // Asegúrate de que la ruta al archivo sea correcta

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
