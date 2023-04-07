import React, {FC} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

interface IProps {
  onAdded?: (text: string) => void;
}
const AddToDo: FC<IProps> = ({onAdded}: IProps) => {
  const [text, setText] = React.useState<string>('');

  const onChangeText = (value: string): void => {
    setText(value);
  };

  const onPress = (): void => {
    onAdded?.(text);
  };

  return (
    <View>
      <Text>AddToDo</Text>
      <TextInput testID="add-todo-input" onChangeText={onChangeText} />
      <Button testID="add-todo-button" title="Add" onPress={onPress} />
    </View>
  );
};

export default AddToDo;
