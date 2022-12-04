import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

const Todo: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Todo!!</Text>
      <Button title="Todo" onPress={() => navigation.navigate('Todo')}></Button>
    </View>
  );
};

export default Todo;
