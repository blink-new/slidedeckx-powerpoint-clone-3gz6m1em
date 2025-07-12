import React from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, MoreHorizontal } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface SlidesPaneProps {
  selectedSlide: number
  onSlideSelect: (index: number) => void
}

export function SlidesPane({ selectedSlide, onSlideSelect }: SlidesPaneProps) {
  const slides = [
    { id: 1, title: "Title Slide", thumbnail: null },
    { id: 2, title: "Agenda", thumbnail: null },
    { id: 3, title: "Key Points", thumbnail: null },
    { id: 4, title: "Summary", thumbnail: null },
  ]

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-900">Slides</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New Slide</DropdownMenuItem>
              <DropdownMenuItem>Duplicate Slide</DropdownMenuItem>
              <DropdownMenuItem>Delete Slide</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full justify-start h-8"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Slide
        </Button>
      </div>

      {/* Slides List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                selectedSlide === index
                  ? 'border-[hsl(var(--ppt-primary))] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onSlideSelect(index)}
            >
              {/* Slide Number */}
              <div className="absolute -left-1 -top-1 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                {index + 1}
              </div>
              
              {/* Slide Thumbnail */}
              <div className="aspect-[16/9] bg-white rounded-lg p-3 overflow-hidden">
                {index === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      Click to add title
                    </div>
                    <div className="text-xs text-gray-500">
                      Click to add subtitle
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className="h-full">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Agenda
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600">• Topic 1</div>
                      <div className="text-xs text-gray-600">• Topic 2</div>
                      <div className="text-xs text-gray-600">• Topic 3</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      {slide.title}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded border border-gray-200"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}