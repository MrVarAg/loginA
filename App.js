import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignIn from './src/screens/login';
import Register from './src/screens/register';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<SignIn />*/}
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
