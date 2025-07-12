import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  MessageSquare, 
  Eye, 
  Languages, 
  Wifi 
} from 'lucide-react'

interface StatusBarProps {
  onToggleNotes: () => void
  showNotes: boolean
}

export function StatusBar({ onToggleNotes, showNotes }: StatusBarProps) {
  return (
    <div className="bg-[hsl(var(--ppt-primary))] text-white px-4 py-1 flex items-center justify-between text-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span>Slide 1 of 4</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="h-6 text-white hover:bg-white/20"
          onClick={onToggleNotes}
        >
          <MessageSquare className="w-4 h-4 mr-1" />
          {showNotes ? 'Hide Notes' : 'Show Notes'}
        </Button>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Languages className="w-4 h-4" />
          <span>English (US)</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4" />
          <span>Connected</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="h-6 text-white hover:bg-white/20"
        >
          <Eye className="w-4 h-4 mr-1" />
          Slide Show
        </Button>
      </div>
    </div>
  )
}