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

  const onCompleted = (index: number) => (): void => {
    setItems(prev => {
      const cloneItems = [...prev];
      cloneItems[index].completed = !cloneItems[index].completed;
      return cloneItems;
    });
  };

  const onDeleted = (index: number) => (): void => {
    setItems(prev => {
      const cloneItems = [...prev];
      cloneItems.splice(index, 1);
      return cloneItems;
    });
  };

  return (
    <SafeAreaView>
      <View testID="welcome">
        <Text>ToDo TDD</Text>
        <AddToDo onAdded={onAdd} />
        <ToDoList
          items={items}
          onCompleted={onCompleted}
          onDeleted={onDeleted}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
