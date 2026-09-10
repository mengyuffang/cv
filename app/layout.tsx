import './globals.css'
import React from 'react'

export const metadata = {
  title: '方孟榆 — 交互设计师 | CV & Portfolio',
  description: '交互设计师方孟榆的个人网站与作品集',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  )
}
