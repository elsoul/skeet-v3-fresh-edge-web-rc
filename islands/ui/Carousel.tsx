import { useCallback, useEffect, useState } from 'preact/hooks'
import { Circle } from 'iconoir-react'

interface CarouselProps {
  children: preact.ComponentChildren
  autoSlide?: boolean
  autoSlideInterval?: number
}

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 6400,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = Array.isArray(children) ? children.length : 1
  let touchStartX = 0
  let touchEndX = 0

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) goToNextSlide()
    if (touchEndX - touchStartX > 50) goToPreviousSlide()
  }

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  const goToPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    )
  }, [totalSlides])

  useEffect(() => {
    if (!autoSlide) return

    const interval = setInterval(goToNextSlide, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, autoSlideInterval, goToNextSlide])

  return (
    <div
      class='relative w-full overflow-hidden'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        class='flex transition-transform duration-500'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
            <div class='w-full flex-shrink-0' key={index}>
              {child}
            </div>
          ))
          : children}
      </div>

      <div class='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Circle
            key={index}
            class={`${
              index === currentIndex
                ? 'text-zinc-950 dark:text-white'
                : 'text-zinc-400 dark:text-zinc-500'
            } w-4 h-4 cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
