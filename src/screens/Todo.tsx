import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';
import Form from '../components/Form';
import {Item} from '../ts/interfaces';
import TodoItem from '../components/TodoItem';
import {useAppContext} from '../context';
import {styles} from '../assets/styles/styles';

interface Props extends StackScreenProps<RootStackParams, 'Todo'> {}

const Todo: React.FC<Props> = ({navigation}) => {
  const {todo, removeAll} = useAppContext();

  return (
    <View>
      <Text>Todo world</Text>
      <Form />
      <View style={styles.todoList}>
        <View style={styles.todoContainer}>
          {todo.map((item: Item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </View>
      </View>
      {todo.length > 0 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.removeItem} onPress={removeAll}>
            <Text style={styles.removeItemText}>Remove all</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Todo;
