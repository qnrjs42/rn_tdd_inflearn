import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface IProps {
  item: {
    text: string;
    completed: boolean;
  };
  index?: number;
  onCompleted?: (index: number) => () => void;
  onDeleted?: (index: number) => () => void;
}
const ToDoItem: FC<IProps> = ({
  item,
  index = 0,
  onCompleted = () => () => {},
  onDeleted = () => () => {},
}: IProps) => {
  return (
    <View
      testID="todo-item"
      style={item?.completed ? styles.completed : styles.default}>
      <Text testID={item?.completed ? 'todo-completed' : 'todo-uncompleted'}>
        {item.text}
      </Text>
      <Button
        testID="todo-item-complete-button"
        title="C"
        onPress={onCompleted(index)}
      />
      <Button
        testID="todo-item-delete-button"
        title="D"
        onPress={onDeleted(index)}
      />
    </View>
  );
};

export default ToDoItem;

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
  },
  completed: {
    backgroundColor: 'red',
  },
});
