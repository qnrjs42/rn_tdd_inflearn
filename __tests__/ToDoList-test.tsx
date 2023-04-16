import React from 'react';
import {render, type RenderAPI} from '@testing-library/react-native';

import ToDoList from '../src/ToDoList';

describe('ToDoList Rneder', () => {
  let toDoList: RenderAPI;
  let props: any;

  beforeEach(() => {
    props = {
      items: [
        {
          text: 'some Todo 1',
          completed: false,
        },
        {
          text: 'some Todo2',
          completed: true,
        },
      ],
    };
    toDoList = render(<ToDoList {...props} />);
  });

  test('should render a flat list?', async () => {
    toDoList.getByTestId('todo-list');
  });

  test('should pass props to FlatList', async () => {
    const flatListData = toDoList.getByTestId('todo-list').props.data;
    expect(flatListData).toEqual(props.items);
  });
});
