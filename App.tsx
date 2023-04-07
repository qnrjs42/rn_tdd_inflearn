import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View testID="welcome">
        <Text>Welcome to React Native!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
