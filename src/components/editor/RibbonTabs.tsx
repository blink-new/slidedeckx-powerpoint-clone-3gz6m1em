import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Type, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered,
  Image,
  Square,
  Circle
} from 'lucide-react'

interface RibbonTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function RibbonTabs({ activeTab, onTabChange }: RibbonTabsProps) {
  const tabs = ['File', 'Home', 'Insert', 'Design', 'Transitions', 'Animations', 'Slide Show', 'Review', 'View']

  const renderHomeTab = () => (
    <div className="flex items-center space-x-4 px-4 py-2">
      {/* Clipboard */}
      <div className="flex flex-col items-center space-y-1">
        <div className="text-xs text-gray-600 font-medium">Clipboard</div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="flex flex-col h-12 w-16">
            <div className="text-xs">Paste</div>
          </Button>
          <div className="flex flex-col space-y-1">
            <Button variant="ghost" size="sm" className="h-5 px-2 text-xs">Cut</Button>
            <Button variant="ghost" size="sm" className="h-5 px-2 text-xs">Copy</Button>
          </div>
        </div>
      </div>
      
      <Separator orientation="vertical" className="h-12" />
      
      {/* Font */}
      <div className="flex flex-col space-y-1">
        <div className="text-xs text-gray-600 font-medium">Font</div>
        <div className="flex items-center space-x-1">
          <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
            <option>Calibri</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>
          <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white w-12">
            <option>44</option>
            <option>36</option>
            <option>24</option>
          </select>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Bold className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Italic className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Underline className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <Separator orientation="vertical" className="h-12" />
      
      {/* Paragraph */}
      <div className="flex flex-col space-y-1">
        <div className="text-xs text-gray-600 font-medium">Paragraph</div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <List className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <ListOrdered className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <AlignLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <AlignCenter className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <AlignRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <Separator orientation="vertical" className="h-12" />
      
      {/* Drawing */}
      <div className="flex flex-col space-y-1">
        <div className="text-xs text-gray-600 font-medium">Drawing</div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Square className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Circle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Type className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  const renderInsertTab = () => (
    <div className="flex items-center space-x-4 px-4 py-2">
      {/* Tables */}
      <div className="flex flex-col space-y-1">
        <div className="text-xs text-gray-600 font-medium">Tables</div>
        <Button variant="ghost" size="sm" className="flex flex-col h-12 w-16">
          <div className="text-xs">Table</div>
        </Button>
      </div>
      
      <Separator orientation="vertical" className="h-12" />
      
      {/* Images */}
      <div className="flex flex-col space-y-1">
        <div className="text-xs text-gray-600 font-medium">Images</div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="flex flex-col h-12 w-16">
            <Image className="w-4 h-4 mb-1" />
            <div className="text-xs">Pictures</div>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col h-12 w-16">
            <div className="text-xs">Icons</div>
          </Button>
        </div>
      </div>
      
      <Separator orientation="vertical" className="h-12" />
      
      {/* Text */}
      <div className="flex flex-col space-y-1">
        <div className="text-xs text-gray-600 font-medium">Text</div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="flex flex-col h-12 w-16">
            <Type className="w-4 h-4 mb-1" />
            <div className="text-xs">Text Box</div>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col h-12 w-16">
            <div className="text-xs">Header</div>
          </Button>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return renderHomeTab()
      case 'Insert':
        return renderInsertTab()
      default:
        return (
          <div className="px-4 py-2 text-sm text-gray-500">
            {activeTab} tab content
          </div>
        )
    }
  }

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Tab Headers */}
      <div className="flex items-center border-b border-gray-200">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            className={`h-8 px-4 rounded-none text-sm font-medium ${
              activeTab === tab 
                ? 'bg-white border-b-2 border-[hsl(var(--ppt-primary))] text-[hsl(var(--ppt-primary))]' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="bg-[hsl(var(--ppt-ribbon-bg))] min-h-[80px]">
        {renderContent()}
      </div>
    </div>
  )
}