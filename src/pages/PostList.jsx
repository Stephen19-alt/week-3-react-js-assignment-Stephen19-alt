import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data.slice(0, 20))
      } catch (err) {
        setError('Failed to load posts')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filtered = posts.filter(p => p.title.includes(search))

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div>
      <Input className="mb-4" placeholder="Search posts..." value={search} onChange={e => setSearch(e.target.value)} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(post => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <h2 className="font-bold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
