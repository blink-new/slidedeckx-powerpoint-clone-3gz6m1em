import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  Save, 
  Undo, 
  Redo, 
  ChevronDown 
} from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function QuickAccessToolbar() {
  return (
    <TooltipProvider>
      <div className="bg-white border-b border-gray-200 px-3 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <Save className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save (Ctrl+S)</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <Undo className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Undo (Ctrl+Z)</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <Redo className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Redo (Ctrl+Y)</TooltipContent>
          </Tooltip>
          
          <div className="h-4 w-px bg-gray-300 mx-1" />
          
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-600">Auto-save on</div>
        </div>
      </div>
    </TooltipProvider>
  )
}