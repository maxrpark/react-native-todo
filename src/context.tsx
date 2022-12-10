import React, {useContext, useReducer, useEffect} from 'react';
import {Alert} from 'react-native';
import useTodoReducer from './todoReducer';
import {Item, AlertMessage} from './ts/interfaces';
import {actionType} from './ts/reducer/actionType';

type Props = {
  children: React.ReactNode;
};

interface AppInterface {
  todo: [] | Item[];
  showAlert: boolean;
  isEditing: boolean;
  alertMessage: AlertMessage;
  ItemID: string;
  ItemValue: string;
  removeAll: () => void;
  formInput: (e: any) => void;
  completeItem: (id: string) => void;
  handleForm: (e: React.FormEvent) => void;
  editItem: (id: string) => void;
  deleteItem: (id: string) => void;
  displayAlert: (message: string, type: string) => void;
}

export interface InitialState {
  todo: [] | Item[];
  showAlert: boolean;
  isEditing: boolean;
  alertMessage: AlertMessage;
  ItemID: string;
  ItemValue: string;
}

const InitialState = {
  todo: [{id: '21312', value: 'max', isComplete: true}],
  showAlert: false,
  isEditing: false,
  ItemID: '',
  ItemValue: '',
  alertMessage: {
    message: '',
    type: '',
  },
};
const AppContext = React.createContext({} as AppInterface);

export const AppProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(
    useTodoReducer,
    InitialState as InitialState,
  );

  // CHANGE INPUT VALUE
  const formInput = (value: string) => {
    dispatch({type: actionType.UPDATE_INPUT, payload: value});
  };

  // FORMSUBMIT
  const handleForm = () => {
    if (state.ItemValue && state.ItemValue.trim() !== '') {
      if (state.isEditing && state.ItemValue) {
        dispatch({type: actionType.EDITING_ITEM, payload: state.ItemValue});
        displayAlert('Task Edited', 'success');
      } else {
        dispatch({type: actionType.ADD_ITEM, payload: state.ItemValue});
        displayAlert('Task Added', 'success');
      }
    } else {
      displayAlert('Please Enter Task', 'danger');
    }
  };

  // TOOGLE COMPLETE
  const completeItem = (id: string) => {
    dispatch({type: actionType.TOGGLE_COMPLETE, payload: id});

    state.todo.map((item: Item) => {
      if (item.id === id) {
        if (!item.isComplete) {
          displayAlert('Task Completed', 'success');
        }
      }
    });
  };

  // EDITING
  const editItem = (id: string) => {
    dispatch({type: actionType.EDIT_ITEM, payload: id});
    displayAlert('Editing...', 'warning');
  };
  const deleteItem = (id: string) => {
    dispatch({type: actionType.DELETE_ITEM, payload: id});
    displayAlert('Task Deleted', 'danger');
  };

  // REMOVE ALL
  const removeAll = () => {
    Alert.alert('Remove Items', 'Are you sure you want to remove all task?', [
      {
        text: 'Yes',
        onPress: () => dispatch({type: actionType.REMOVE_ALL}),
        style: 'cancel',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);

    // displayAlert('All items removed', 'danger');
    // showAlert();
  };

  // ALERT
  const displayAlert = (message: string, type: string) => {
    const alert = {
      message,
      type,
    };
    dispatch({type: actionType.DISPLAY_ALERT, payload: alert});
  };

  useEffect(() => {
    if (state.alertMessage.message !== 'Editing...') {
      let timeOut = setTimeout(() => {
        dispatch({type: actionType.HIDE_ALERT});
      }, 1500);
      return () => clearTimeout(timeOut);
    }
  }, [state.alertMessage.message, state.todo]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        completeItem,
        formInput,
        editItem,
        deleteItem,
        displayAlert,
        removeAll,
        handleForm,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};
