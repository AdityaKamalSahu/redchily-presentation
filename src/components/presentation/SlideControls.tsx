import { ArrowLeft, ArrowRight } from 'lucide-react'

type SlideControlsProps = {
  current: number
  total: number
  onNavigate: (index: number) => void
}

export function SlideControls({ current, total, onNavigate }: SlideControlsProps) {
  return (
    <nav className="slide-controls" aria-label="Slide navigation">
      <button className="control-button" type="button" onClick={() => onNavigate(current - 1)} disabled={current === 0} aria-label="Previous slide" tabIndex={current === 0 ? -1 : 0}>
        <ArrowLeft size={18} strokeWidth={1.7} />
      </button>
      <button className="control-button control-button--next" type="button" onClick={() => onNavigate(current + 1)} disabled={current === total - 1} aria-label="Next slide" tabIndex={current === total - 1 ? -1 : 0}>
        <ArrowRight size={18} strokeWidth={1.7} />
      </button>
    </nav>
  )
}
