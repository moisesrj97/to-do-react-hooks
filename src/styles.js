export const TodoAppStyles = {
  main: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
  },
  container: {
    borderRadius: '50px',
    background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
    boxShadow: '20px 20px 60px #bebebe,-20px -20px 60px #ffffff',
    width: '50%',
    minHeight: '500px',
  },
  title: {
    fontWeight: '300',
    fontSize: '2rem',
    textAlign: 'center',
  },
  titleEmphatized: {
    color: '#3f51b5',
  },

  '@media (max-width: 500px)': {
    main: {
      padding: '10px 0',
      alignItems: 'flex-start',
    },

    container: {
      width: '90%',
      minHeight: '100vh',
    },
  },
};

export const TodoFormStyles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: '50px',
    background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    boxShadow: '18px 18px 36px #bebebe, -18px -18px 36px #ffffff',
    transition: 'all 0.3s linear',
  },
  button: {
    border: 'none',
    margin: 0,
    padding: 0,
    marginLeft: '10px',
    height: '30px',
    width: '30px',
    borderRadius: '50px',
    background: '#e0e0e0',
    boxShadow: '18px 18px 36px #bebebe, -18px -18px 36px #ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
      boxShadow: '18px 18px 36px #bebebe, -18px -18px 36px #ffffff',
      transition: 'all 0.3s linear',
    },
    '&:active': {
      background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
      boxShadow: '18px 18px 36px #bebebe, -18px -18px 36px #ffffff',
      transition: 'all 0.3s linear',
    },
  },
};

export const TodoListStyles = {
  todoList: {
    minHeight: '100%',
    margin: '20px',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export const TodoStyles = {
  todo: {
    margin: '5px 0',
    padding: '5px 10px',
    borderRadius: '76px',
    backgroundColor: '#e0e0e0;',
    boxShadow: '6px 6px 19px #cacaca, -6px -6px 19px #f6f6f6;',
    fontWeight: '200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& div': {
      display: 'flex',
    },
    '&:hover $edit': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'all 0.3s',
    },
    '&:hover $delete': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'all 0.3s',
    },
    '& p': {
      margin: 0,
    },
  },
  edit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3f51b5',
    cursor: 'pointer',
    opacity: 0,
    transform: 'scale(0)',
    margin: '0 3px',
  },
  delete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ff0000b0',
    cursor: 'pointer',
    opacity: 0,
    transform: 'scale(0)',
    margin: '0 3px',
  },
};

export const EditInputStyles = {
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: '200',
    outline: 'none',
    fontSize: '1rem',
    color: '#3f51b5',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  },
};
