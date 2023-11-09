import { useState, useEffect } from 'react'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './App.css'

function App() {

  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({})

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist))
  }, [tasklist])

  return (
    <>
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}/>
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}/>
      <Footer />
    </div>
    </>
  )
}

export default App
