import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react'

interface MainCanvasProps {
  selectedSlide: number
}

export function MainCanvas({ selectedSlide }: MainCanvasProps) {
  const [zoom, setZoom] = useState(100)

  const renderSlideContent = () => {
    switch (selectedSlide) {
      case 0:
        return (
          <div className="h-full flex flex-col justify-center items-center text-center p-12">
            <div 
              className="text-4xl font-bold text-gray-900 mb-6 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Click to add title
            </div>
            <div 
              className="text-xl text-gray-600 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Click to add subtitle
            </div>
          </div>
        )
      case 1:
        return (
          <div className="h-full p-12">
            <div 
              className="text-3xl font-bold text-gray-900 mb-8 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Agenda
            </div>
            <div className="space-y-4">
              <div 
                className="text-lg text-gray-700 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
                contentEditable
                suppressContentEditableWarning={true}
              >
                • First topic item
              </div>
              <div 
                className="text-lg text-gray-700 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
                contentEditable
                suppressContentEditableWarning={true}
              >
                • Second topic item
              </div>
              <div 
                className="text-lg text-gray-700 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
                contentEditable
                suppressContentEditableWarning={true}
              >
                • Third topic item
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="h-full flex flex-col justify-center items-center text-center p-12">
            <div 
              className="text-3xl font-bold text-gray-900 mb-6 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Click to add title
            </div>
            <div 
              className="text-lg text-gray-600 cursor-text hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded p-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Click to add content
            </div>
          </div>
        )
    }
  }

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      {/* Canvas Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => setZoom(Math.max(25, zoom - 25))}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-gray-600 min-w-12 text-center">{zoom}%</span>
          <Button variant="ghost" size="sm" onClick={() => setZoom(Math.min(400, zoom + 25))}>
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Maximize className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
        <div 
          className="bg-white shadow-lg border border-gray-200 relative"
          style={{ 
            width: `${1280 * (zoom / 100)}px`, 
            height: `${720 * (zoom / 100)}px`,
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'center center'
          }}
        >
          {/* Grid overlay for alignment guides */}
          <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(to right, #ccc 1px, transparent 1px),
                linear-gradient(to bottom, #ccc 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Slide Content */}
          <div className="relative z-10 w-full h-full">
            {renderSlideContent()}
          </div>
        </div>
      </div>
    </div>
  )
}