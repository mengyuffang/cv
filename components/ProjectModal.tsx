import React, { useEffect } from 'react'
// GSAP is optional here; demo shows where to init animations
// import { gsap } from 'gsap'

export default function ProjectModal({ project, onClose }:{project:any,onClose:()=>void}){
  useEffect(()=>{
    function onKey(e:KeyboardEvent){
      if(e.key==='Escape') onClose()
    }
    window.addEventListener('keydown',onKey)
    return ()=>window.removeEventListener('keydown',onKey)
  },[onClose])

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal">
        <button className="close" onClick={onClose} aria-label="关闭">✕</button>
        <h2 style={{marginTop:8}}>{project.title}</h2>
        <p style={{color:'var(--muted-2)'}}>{project.excerpt}</p>

        <section style={{marginTop:24}}>
          <h3>可玩交互（占位示例）</h3>
          <p style={{color:'var(--muted-2)'}}>此处将放置项目内的可玩交互（例如拖动、参数调节或 Three.js 旋转示例）。</p>
          <div style={{marginTop:16,padding:16,background:'rgba(255,255,255,0.02)',borderRadius:8}}>
            <p style={{color:'var(--muted-2)'}}>交互占位：Use GSAP / Lenis inside a client component to initialize behaviors.</p>
          </div>
        </section>

        <section style={{marginTop:24}}>
          <h3>项目详情（模板）</h3>
          <ul style={{color:'var(--muted-2)'}}>
            <li>背景</li>
            <li>我的角色</li>
            <li>过程</li>
            <li>成果与链接</li>
          </ul>
        </section>

      </div>
    </div>
  )
}
