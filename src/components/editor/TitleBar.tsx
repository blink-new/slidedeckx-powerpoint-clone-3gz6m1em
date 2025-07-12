import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  Minimize2, 
  Square, 
  X, 
  Share, 
  MessageSquare, 
  User 
} from 'lucide-react'

export function TitleBar() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      {/* Left side - File info */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[hsl(var(--ppt-primary))] rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Presentation1</div>
            <div className="text-xs text-gray-500">Saved to OneDrive</div>
          </div>
        </div>
      </div>
      
      {/* Center - Sharing and collaboration */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-[hsl(var(--ppt-primary))]">
          <Share className="w-4 h-4 mr-2" />
          Share
        </Button>
        
        <Button variant="ghost" size="sm">
          <MessageSquare className="w-4 h-4 mr-2" />
          Comments
        </Button>
        
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      
      {/* Right side - Window controls */}
      <div className="flex items-center">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
          <Minimize2 className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
          <Square className="w-3 h-3" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-red-500 hover:text-white">
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}