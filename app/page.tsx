import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    id: 'p1',
    title: '交互装置 A',
    category: '装置',
    cover: '/placeholder.jpg',
    excerpt: '一个基于物理交互的可玩原型示例。'
  },
  {
    id: 'p2',
    title: '视觉系统 B',
    category: '品牌',
    cover: '/placeholder.jpg',
    excerpt: '品牌视觉系统与包装设计。'
  }
]

export default function Page() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = (id: string) => setOpenId(id)
  const closeProject = () => setOpenId(null)

  return (
    <main className="site-root">
      <header className="hero">
        <h1 className="hero-title">方孟榆
        </h1>
        <p className="hero-sub">交互设计师 — 专注沉浸式项目与体验设计</p>
      </header>

      <section className="projects">
        <h2 className="section-title">精选项目</h2>
        <div className="grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={() => openProject(p.id)} />
          ))}
        </div>
      </section>

      {openId && (
        <ProjectModal project={projects.find(p => p.id === openId)!} onClose={closeProject} />
      )}

    </main>
  )
}
