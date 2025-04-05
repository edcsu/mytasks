import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import ShowTasks from './components/task/ShowTasks';
import { TaskContextProvider } from './store/taskcontext';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import AddTaskForm from './components/task/AddTaskForm';

const App = () => {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  // function to toggle the dark mode as true or false
  const toggleTheme = () => {
    setToggleDarkMode(prevState =>!prevState);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
    },
  });
  
  return (
    <TaskContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header isDark={toggleDarkMode} toggleTheme={toggleTheme} />
        <Container maxWidth="sm">
          <AddTaskForm />
          <ShowTasks />
        </Container>
      </ThemeProvider>
    </TaskContextProvider>
  )
}

export default App
