import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
