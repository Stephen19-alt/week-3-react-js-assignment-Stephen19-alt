import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
    setText('')
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filtered = tasks.filter(task =>
    filter === 'all' ? true : filter === 'active' ? !task.completed : task.completed
  )

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input value={text} onChange={e => setText(e.target.value)} placeholder="New Task" />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>All</Button>
        <Button variant={filter === 'active' ? 'default' : 'outline'} onClick={() => setFilter('active')}>Active</Button>
        <Button variant={filter === 'completed' ? 'default' : 'outline'} onClick={() => setFilter('completed')}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filtered.map(task => (
          <li key={task.id} className="flex items-center gap-2 p-2 border rounded">
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}