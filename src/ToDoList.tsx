import React, {FC} from 'react';
import {View, FlatList} from 'react-native';

interface IProps {
  items?: any[];
}
const ToDoList: FC<IProps> = ({items}: IProps) => {
  return (
    <View>
      <FlatList testID="todo-list" data={items || []} />
    </View>
  );
};

export default ToDoList;
