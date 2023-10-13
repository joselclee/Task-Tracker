import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Leetcode Session',
        day: 'Oct 6th at 5:00PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Homework Due: Chapter 7 and 8',
        day: 'Oct 7th at 11:59PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Breakfast and Movie Date with Maral',
        day: 'Oct 10th at 10:00AM',
        reminder: true,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} /> ) : ('No Tasks Right Now')
      }
    </div>
  );
}

export default App;


//1:22:39
