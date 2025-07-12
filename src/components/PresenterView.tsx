import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  ArrowRight, 
  X, 
  Pause, 
  Play, 
  MoreHorizontal 
} from 'lucide-react'

export function PresenterView() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const slides = [
    { title: "Welcome to SlideDeckX", content: "A modern presentation platform" },
    { title: "Features", content: "• Real-time collaboration\n• Rich media support\n• Professional templates" },
    { title: "Getting Started", content: "Create your first presentation today" },
    { title: "Thank You", content: "Questions?" }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="h-screen bg-black text-white flex">
      {/* Main Slide Area */}
      <div className="flex-1 flex flex-col">
        {/* Control Bar */}
        <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-gray-700"
              onClick={() => navigate('/editor')}
            >
              <X className="w-4 h-4 mr-2" />
              End Show
            </Button>
            
            <div className="text-sm text-gray-300">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-gray-700"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <span className="text-lg font-mono">{formatTime(timer)}</span>
            </div>
            
            <Button variant="ghost" className="text-white hover:bg-gray-700">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Current Slide Display */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-4xl aspect-[16/9] bg-white text-black rounded-lg shadow-2xl p-12 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {slides[currentSlide].title}
            </h1>
            <div className="text-xl text-gray-700 whitespace-pre-line">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="bg-gray-900 px-6 py-3 flex items-center justify-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-gray-700"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            variant="ghost"
            className="text-white hover:bg-gray-700"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Speaker Notes Panel */}
      <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Speaker Notes</h3>
        </div>
        
        <div className="flex-1 p-4">
          <div className="text-sm text-gray-300 leading-relaxed">
            {currentSlide === 0 && "Welcome everyone to today's presentation. Take a moment to introduce yourself and the topic."}
            {currentSlide === 1 && "Go through each feature slowly. Allow time for questions after each point."}
            {currentSlide === 2 && "Encourage the audience to try creating their first presentation. Mention available resources."}
            {currentSlide === 3 && "Thank the audience and open the floor for questions. Be prepared to demo specific features if asked."}
          </div>
        </div>
        
        {/* Next Slide Preview */}
        <div className="p-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Next Slide:</div>
          {currentSlide < slides.length - 1 ? (
            <div className="bg-gray-700 p-3 rounded text-xs">
              <div className="font-medium mb-1">{slides[currentSlide + 1].title}</div>
              <div className="text-gray-400 text-xs line-clamp-2">{slides[currentSlide + 1].content}</div>
            </div>
          ) : (
            <div className="text-gray-500 text-xs">End of presentation</div>
          )}
        </div>
      </div>
    </div>
  )
}