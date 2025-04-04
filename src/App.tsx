import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import Addtask from './components/task/Addtask';
function App() {

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Addtask />
      </Container>
    </>
  )
}

export default App
