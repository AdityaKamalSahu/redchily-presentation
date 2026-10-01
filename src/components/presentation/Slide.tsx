import type { ReactNode } from 'react'

type SlideProps = {
  active: boolean
  index: number
  children: ReactNode
}

export function Slide({ active, index, children }: SlideProps) {
  return (
    <section className={`slide${active ? ' slide--active' : ''}`} aria-hidden={!active} aria-label={`Slide ${index + 1}`}>
      <div className="slide__inner" style={{ '--slide-index': index } as React.CSSProperties}>
        {children}
      </div>
    </section>
  )
}
