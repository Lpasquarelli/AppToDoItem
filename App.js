
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ToDoScreen from './src/pages/ToDoScreen';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ToDoScreen />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    },
});

export default App;
