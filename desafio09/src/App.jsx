import './App.css'
import Form from './components/Form'
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'


function App() {

  return (
    <>
    <TodoHeader name="Todo App" />
    <Form />
    <TodoFooter />
    </>
  )
}

export default App
