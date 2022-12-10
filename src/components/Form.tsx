import {useAppContext} from '../context';
import {styles} from '../assets/styles/styles';
import {TextInput, View} from 'react-native';

const Form: React.FC = () => {
  const {handleForm, formInput, ItemValue} = useAppContext();
  return (
    <View style={styles.formContainer}>
      <TextInput
        onChangeText={formInput}
        value={ItemValue}
        style={styles.inputControl}
        placeholder="Type something..."
        maxLength={25}
        onSubmitEditing={handleForm}
      />
    </View>
  );
};

export default Form;
