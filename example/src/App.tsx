import { StyleSheet, View, Text } from 'react-native';
import { MyComponent } from 'react-native-multiplier';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <MyComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
