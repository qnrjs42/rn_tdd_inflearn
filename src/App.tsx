import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App = () => {
  const [items, setItems] = React.useState<any[]>([]);

  const onAdd = (text: string): void => {
    console.log('onAdd', text);
    setItems(prev => [
      {
        text,
        completed: false,
      },
      ...prev,
    ]);
  };

  return (
    <SafeAreaView>
      <View testID="welcome">
        <Text>ToDo TDD</Text>
        <AddToDo onAdded={onAdd} />
        <ToDoList items={items} />
      </View>
    </SafeAreaView>
  );
};

export default App;
