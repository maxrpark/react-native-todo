import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppContext} from '../context';
import {Item} from '../ts/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../assets/styles/styles';
interface Props {
  item: Item;
}
const TodoItem: React.FC<Props> = ({item}) => {
  const {deleteItem, completeItem, editItem} = useAppContext();
  return (
    <View
      style={[styles.item, item.isComplete && styles.isComplete]}
      key={item.id}>
      <Text>{item.value}</Text>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          onPress={() => editItem(item.id)}
          activeOpacity={0.7}
          style={[styles.btn, styles.edit]}>
          <Icon size={15} name="pencil-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => completeItem(item.id)}
          style={[
            styles.btn,
            styles.complete,
            item.isComplete && styles.iconCompleted,
          ]}>
          <Icon
            style={item.isComplete && {color: 'white'}}
            size={15}
            name="checkmark-done-outline"></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteItem(item.id)}
          style={[styles.btn, styles.delete]}>
          <Icon size={15} name="trash-outline"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
