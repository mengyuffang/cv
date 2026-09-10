import React from 'react'

type Project = {
  id: string
  title: string
  category: string
  cover: string
  excerpt: string
}

export default function ProjectCard({ project, onOpen }:{project:Project,onOpen:()=>void}){
  return (
    <article className="card" role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e)=>{if(e.key==='Enter') onOpen()}} aria-label={`打开项目 ${project.title}`}>
      <div style={{height:150,background:'#111',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#666'}}>封面占位</div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-excerpt">{project.excerpt}</p>
    </article>
  )
}
