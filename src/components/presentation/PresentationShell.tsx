import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Slide } from './Slide'
import { SlideControls } from './SlideControls'
import { ProgressBar } from './ProgressBar'
import { CoverSlide } from '../../slides/CoverSlide'
import { VisionSlide } from '../../slides/VisionSlide'
import { ExperienceSlide } from '../../slides/ExperienceSlide'
import { Slide04PublicNewsExperience } from '../../slides/Slide04PublicNewsExperience'
import { Slide05DistrictFirst } from '../../slides/Slide05DistrictFirst'
import { Slide06ArticleExperience } from '../../slides/Slide06ArticleExperience'
import { Slide07NewsroomWorkflow } from '../../slides/Slide07NewsroomWorkflow'
import { Slide08AdminControl } from '../../slides/Slide08AdminControl'
import { Slide09TechnologyArchitecture } from '../../slides/Slide09TechnologyArchitecture'
import { Slide10ProductRoadmap } from '../../slides/Slide10ProductRoadmap'
import { Slide11Closing } from '../../slides/Slide11Closing'

const slides = [CoverSlide, VisionSlide, ExperienceSlide, Slide04PublicNewsExperience, Slide05DistrictFirst, Slide06ArticleExperience, Slide07NewsroomWorkflow, Slide08AdminControl, Slide09TechnologyArchitecture, Slide10ProductRoadmap, Slide11Closing]

export function PresentationShell() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideCount = slides.length
  const goTo = useCallback((index: number) => {
    setCurrentSlide(Math.min(slideCount - 1, Math.max(0, index)))
  }, [slideCount])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        goTo(currentSlide + 1)
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        goTo(currentSlide - 1)
      } else if (event.key === 'Home') {
        goTo(0)
      } else if (event.key === 'End') {
        goTo(slideCount - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, goTo, slideCount])

  return (
    <main className="presentation" aria-label="Red Chily presentation">
      <ProgressBar current={currentSlide} total={slideCount} />
      <div className={`slides-viewport slides-viewport--${currentSlide + 1}`} aria-live="polite" aria-atomic="true">
        {slides.map((SlideContent, index) => (
          <Slide key={SlideContent.name} active={index === currentSlide} index={index}>
            <SlideContent />
          </Slide>
        ))}
      </div>

      <footer className={`presentation-footer${currentSlide !== 1 && currentSlide < 3 ? ' presentation-footer--dark' : currentSlide >= 3 ? ` presentation-footer--product${[0, 2, 3, 4, 6, 8, 9, 10].includes(currentSlide) ? ' presentation-footer--dark' : ''}` : ''}`}>
        <p className="keyboard-hint"><ChevronLeft size={14} /> <ChevronRight size={14} /> <span>नेविगेट करने के लिए तीर कुंजियाँ</span></p>
        <SlideControls current={currentSlide} total={slideCount} onNavigate={goTo} />
        <p className="slide-counter"><span>{String(currentSlide + 1).padStart(2, '0')}</span><i>/</i>{String(slideCount).padStart(2, '0')}</p>
      </footer>
    </main>
  )
}
