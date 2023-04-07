import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import AddToDO from '../src/AddToDo';

describe('AddToDO Rneder', () => {
  let addToDo: any;
  beforeEach(() => {
    addToDo = render(<AddToDO />);
  });

  test('is <TextInput> visible?', async () => {
    const textInput = addToDo.getByTestId('add-todo-input');
    expect(textInput).toBeTruthy();
  });

  test('is <Button> visible?', async () => {
    const button = addToDo.getByTestId('add-todo-button');
    expect(button).toBeTruthy();
  });
});

describe('AddToDo Intereaction', () => {
  let addToDo: any;
  let props: {
    onAdded: jest.Mock;
  };
  const text = 'some ToDo';

  beforeEach(() => {
    /**
     * console.warn
      Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md

      38 |
      39 |     const textInput = addToDo.getByTestId('add-todo-input');
    > 40 |     fireEvent.changeText(textInput, text);
     */
    jest.spyOn(console, 'warn').mockImplementation(() => {});

    props = {
      onAdded: jest.fn(),
    };

    addToDo = render(<AddToDO {...props} />);

    const textInput = addToDo.getByTestId('add-todo-input');
    fireEvent.changeText(textInput, text);

    const button = addToDo.getByTestId('add-todo-button');
    fireEvent.press(button);
  });

  test('should call the onAdded callback with input text', () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1);
    expect(props.onAdded).toHaveBeenCalledWith(text);
  });
});
