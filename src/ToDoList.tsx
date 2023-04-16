import React, {FC} from 'react';
import {FlatList, type ListRenderItem} from 'react-native';

import ToDoItem from './ToDoItem';

interface IProps {
  items?: any[];
  onCompleted?: (index: number) => () => void;
  onDeleted?: (index: number) => () => void;
}
const ToDoList: FC<IProps> = ({items = [], onCompleted, onDeleted}: IProps) => {
  const renderItem: ListRenderItem<any> = ({item, index}: any) => {
    return (
      <ToDoItem
        item={item}
        index={index}
        onCompleted={onCompleted}
        onDeleted={onDeleted}
      />
    );
  };

  const keyExtractor = (_: any, index: number): string => index.toString();

  return (
    <FlatList
      testID="todo-list"
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default ToDoList;
