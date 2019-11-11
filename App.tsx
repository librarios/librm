import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeScannerExample from './BarcodeScannerExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>테스트</Text>
      <BarcodeScannerExample></BarcodeScannerExample>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
