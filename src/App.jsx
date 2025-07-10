import React, { useState } from 'react'
import Layout from './layout/Layout'
import TaskManager from './pages/TaskManager'
import PostList from './pages/PostList'
import { Button } from '@/components/ui/button'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const [view, setView] = useState('tasks')

  return (
    <Layout>
      <div className="flex gap-4 mb-4">
        <Button onClick={() => setView('tasks')}>Task Manager</Button>
        <Button onClick={() => setView('posts')}>API Posts</Button>
        <ThemeToggle />
      </div>
      {view === 'tasks' && <TaskManager />}
      {view === 'posts' && <PostList />}
    </Layout>
  )
}