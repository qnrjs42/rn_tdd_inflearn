import React from 'react';
import {render, screen} from '@testing-library/react-native';

import App from '../src/App';
import AddToDO from '../src/AddToDo';
import ToDoList from '../src/ToDoList';

describe('App', () => {
  beforeAll(() => {
    render(<App />);
  });

  test('is Text visible?', async () => {
    const text = screen.getByText('ToDo TDD');
    expect(text).toBeTruthy();
  });

  test('is <AddToDO> visible?', async () => {
    const {toJSON} = render(<AddToDO />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('is <ToDoList> visible?', async () => {
    const {toJSON} = render(<ToDoList />);
    expect(toJSON()).toMatchSnapshot();
  });
});

// describe('Jest', () => {
//   it('is it working?', () => {
//     const a = 1;
//     expect(a + 1).toBe(2);
//   });
// });

// test('examples of some things', async () => {
//   render(<Text>Hello</Text>);

//   expect(screen.toJSON()).toMatchSnapshot();
// });
