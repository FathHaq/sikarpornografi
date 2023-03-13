import React from 'react'

export default function Stat({title, value, color, children}) {
  return (
    <div className="stats shadow py-5 max-w-full">
      <div className="stat">
        <div className="stat-figure text-primary">
          {children}
        </div>
        <div className="stat-title">{title}</div>
        <div className={`stat-value ${color}`}>{value}</div>
      </div>
    </div>
  )
}
