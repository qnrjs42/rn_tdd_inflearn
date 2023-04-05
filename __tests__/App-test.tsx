import {Text} from 'react-native';
import {render, screen} from '@testing-library/react-native';

describe('Jest', () => {
  it('is it working?', () => {
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

test('examples of some things', async () => {
  render(<Text>Hello</Text>);

  expect(screen.toJSON()).toMatchSnapshot();
});
