import { ReactNode } from 'react'

interface TimelineItemProps {
  children: ReactNode
  side: 'left' | 'right'
}

function TimelineItem({ children, side }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${side}`}>
      {children}
    </div>
  )
}

interface TimelineProps {
  children: ReactNode
}

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="timeline-container">
      {children}
    </div>
  )
}

Timeline.Item = TimelineItem