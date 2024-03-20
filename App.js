import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import('./DynamicComponent').then((module) => {
      setComponent(module.default);
    });
  }, []);

  return (
    <View style={styles.container}>
      {Component ? <Component /> : <Text>Loading...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
