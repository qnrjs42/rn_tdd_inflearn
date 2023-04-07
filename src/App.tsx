import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <SafeAreaView>
      <View testID="welcome">
        <Text>ToDo TDD</Text>
        <AddToDo />
        <ToDoList />
      </View>
    </SafeAreaView>
  );
};

export default App;
