import React from 'react'
import Footer from './Footer'
import AddTodo from '../react-containers/AddTodo'
import VisibleTodoList from '../react-containers/VisibleTodoList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

const style = {
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const App = () => (
  <MuiThemeProvider>
      <Paper style={style}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Paper>
  </MuiThemeProvider>
)

export default App