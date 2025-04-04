import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import ShowTasks from './components/task/ShowTasks';
import AddTask from './components/task/AddTask';
import { TaskContextProvider } from './store/taskcontext';

function App() {

  return (
    <TaskContextProvider>
      <Header />
      <Container maxWidth="sm">
        <AddTask />
        <ShowTasks />
      </Container>
    </TaskContextProvider>
  )
}

export default App
