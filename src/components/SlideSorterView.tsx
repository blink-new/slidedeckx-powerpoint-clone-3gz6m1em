import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus, Play } from 'lucide-react'

export function SlideSorterView() {
  const navigate = useNavigate()

  const slides = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Slide ${i + 1}`,
    thumbnail: null
  }))

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/editor')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Editor
          </Button>
          <div className="text-lg font-semibold text-gray-900">Slide Sorter</div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            New Slide
          </Button>
          <Button className="bg-[hsl(var(--ppt-primary))] hover:bg-[hsl(var(--ppt-primary))]/90">
            <Play className="w-4 h-4 mr-2" />
            Start Slideshow
          </Button>
        </div>
      </div>

      {/* Slide Grid */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative cursor-pointer group"
              onClick={() => navigate('/editor')}
            >
              <div className="aspect-[16/9] bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-gray-300 group-hover:scale-105">
                <div className="p-4 h-full flex flex-col">
                  {index === 0 ? (
                    <div className="h-full flex flex-col justify-center items-center text-center">
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        Title Slide
                      </div>
                      <div className="text-sm text-gray-500">
                        Subtitle
                      </div>
                    </div>
                  ) : index === 1 ? (
                    <div className="h-full">
                      <div className="text-lg font-bold text-gray-900 mb-3">
                        Agenda
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600">• Item 1</div>
                        <div className="text-xs text-gray-600">• Item 2</div>
                        <div className="text-xs text-gray-600">• Item 3</div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full">
                      <div className="text-lg font-bold text-gray-900 mb-3">
                        Content Slide
                      </div>
                      <div className="flex-1 bg-gray-100 rounded"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Slide Number */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                {slide.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}