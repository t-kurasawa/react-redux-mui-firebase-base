import React from 'react';
import ReactDOM from 'react-dom';
import FooterComponent from './components/FooterComponent'
import AddTodoContainer from './containers/AddTodoContainer'
import TodoListContainer from './containers/TodoListContainer'

import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeaderComponent from './components/HeaderComponent'

injectTapEventPlugin();

console.log("+++++ App")

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <HeaderComponent />
        <AddTodoContainer />
        <TodoListContainer />
        <FooterComponent />
      </div>
    </MuiThemeProvider>
)

export default App;