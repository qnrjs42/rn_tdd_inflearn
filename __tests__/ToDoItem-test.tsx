import React from 'react';
import {fireEvent, render, type RenderAPI} from '@testing-library/react-native';

import ToDoItem, {styles} from '../src/ToDoItem';

describe('ToDoItem Rneder', () => {
  let toDoItem: RenderAPI;
  let props: any;

  beforeEach(() => {
    props = {
      item: {},
    };

    toDoItem = render(<ToDoItem {...props} />);
  });

  test('should render a <Text>?', async () => {
    const isCompleted = props.item?.completed
      ? 'todo-completed'
      : 'todo-uncompleted';

    toDoItem.queryByTestId(isCompleted);
  });

  test('should render a <Button>?', async () => {
    toDoItem.getByTestId('todo-item-complete-button');
  });

  describe('Uncompleted ToDoItem', () => {
    test('should have the default style', async () => {
      const viewStyle = toDoItem.getByTestId('todo-item').props.style;
      expect(viewStyle).toEqual(styles.default);
    });
  });

  describe('Completed ToDoItem', () => {
    beforeEach(() => {
      props.item.completed = true;

      toDoItem = render(<ToDoItem {...props} />);
    });

    test('should have the completed style', async () => {
      const viewStyle = toDoItem.getByTestId('todo-item').props.style;
      expect(viewStyle).toEqual(styles.completed);
    });
  });

  describe('Complete ToDoItem', () => {
    beforeEach(() => {
      props = {
        item: {
          text: 'first ToDo',
          completed: false,
        },
        index: 0,
        onCompleted: jest.fn(),
      };

      toDoItem = render(<ToDoItem {...props} />);

      const button = toDoItem.getByTestId('todo-item-complete-button');
      fireEvent.press(button);
    });

    test('should call the onCompleted callback with index', () => {
      expect(props.onCompleted).toHaveBeenCalledTimes(1);
      expect(props.onCompleted).toHaveBeenCalledWith(props.index);
    });
  });

  describe('Delete ToDoItem', () => {
    beforeEach(() => {
      props = {
        item: {
          text: 'first ToDo',
          completed: false,
        },
        index: 0,
        onDeleted: jest.fn(),
      };

      toDoItem = render(<ToDoItem {...props} />);

      const button = toDoItem.getByTestId('todo-item-delete-button');
      fireEvent.press(button);
    });

    test('should call the onDeleted callback with index', () => {
      expect(props.onDeleted).toHaveBeenCalledTimes(1);
      expect(props.onDeleted).toHaveBeenCalledWith(props.index);
    });
  });
});
