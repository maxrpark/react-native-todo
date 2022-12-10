import {StyleSheet} from 'react-native';

// :root {
//   --primary-danger: #da4167;
//   --primary-success: #97d8b2;
//   --primary-edit: #ffba08;
//   --primary-white: #fff;
//   --primary-black: #000;
//   --theme-color: #8c57db;
//   --bg-color: rgba(204, 204, 204, 0.075);
//   --bg-color-2: rgba(204, 204, 204, 0.486);
//   --box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
//     rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
//   --box-shadow-2: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
//     rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//   --box-shadow-3: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
// }

const colors = {
  primaryDanger: '#da4167',
  primarySuccess: '#97d8b2',
  primaryEdit: '#ffba08',
  primaryWhite: '#fff',
  primaryBlack: '#000',
  themeColor: '#8c57db',
};

export const styles = StyleSheet.create({
  isComplete: {
    backgroundColor: colors.primarySuccess,
  },

  // .alert-container {
  //   height: 3rem;
  // }
  // .alert-box {
  //   padding: 0.5rem;
  //   border-radius: 5px;
  //   border: 2px solid var(--primary-danger);
  //   margin: 1rem auto;
  // }
  // .danger {
  //   border: 2px solid var(--primary-danger);
  // }
  // .success {
  //   border: 2px solid var(--primary-success);
  // }
  // .warning {
  //   background: var(--primary-edit);
  //   border: none;
  // }
  formContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 'auto',
  },
  inputControl: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  todoContainer: {
    width: '100%',
  },
  todoList: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    textAlign: 'start',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // grid-template-columns: 1fr auto,
    padding: 0.5,
  },
  // .isComplete.item p {
  //   text-decoration: line-through;
  // }
  btnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 30,
    width: 30,
    padding: 0.5,
    border: 'none',
    marginHorizontal: 5,
    backgroundColor: 'white',
  },

  edit: {
    backgroundColor: colors.primaryEdit,
  },
  complete: {
    backgroundColor: colors.primarySuccess,
  },
  delete: {
    backgroundColor: colors.primaryDanger,
  },

  iconCompleted: {
    borderColor: 'white',
    borderWidth: 2,
  },
  removeItem: {
    width: 100,
    borderWidth: 2,
    borderColor: colors.primaryDanger,

    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeItemText: {
    color: colors.primaryDanger,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
