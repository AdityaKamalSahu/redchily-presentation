type ProgressBarProps = {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = total > 0 ? ((current + 1) / total) * 100 : 0
  return (
    <div className="progress-track" role="progressbar" aria-label="Presentation progress" aria-valuemin={1} aria-valuemax={total} aria-valuenow={current + 1}>
      <div className="progress-track__fill" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  )
}
