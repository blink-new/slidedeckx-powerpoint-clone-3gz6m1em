import React, { useState } from 'react'
import { QuickAccessToolbar } from './editor/QuickAccessToolbar'
import { TitleBar } from './editor/TitleBar'
import { RibbonTabs } from './editor/RibbonTabs'
import { SlidesPane } from './editor/SlidesPane'
import { MainCanvas } from './editor/MainCanvas'
import { NotesPanel } from './editor/NotesPanel'
import { StatusBar } from './editor/StatusBar'
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from '@/components/ui/resizable'

export function PresentationEditor() {
  const [activeTab, setActiveTab] = useState('Home')
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [showNotes, setShowNotes] = useState(true)

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Quick Access Toolbar */}
      <QuickAccessToolbar />
      
      {/* Title Bar */}
      <TitleBar />
      
      {/* Ribbon Tabs */}
      <RibbonTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Slides Pane */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <SlidesPane 
              selectedSlide={selectedSlide} 
              onSlideSelect={setSelectedSlide}
            />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Main Canvas Area */}
          <ResizablePanel defaultSize={60} minSize={40}>
            <ResizablePanelGroup direction="vertical" className="h-full">
              {/* Canvas */}
              <ResizablePanel defaultSize={showNotes ? 70 : 100} minSize={50}>
                <MainCanvas selectedSlide={selectedSlide} />
              </ResizablePanel>
              
              {showNotes && (
                <>
                  <ResizableHandle withHandle />
                  {/* Notes Panel */}
                  <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
                    <NotesPanel />
                  </ResizablePanel>
                </>
              )}
            </ResizablePanelGroup>
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Right Panel - Design/Animations/etc */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <div className="h-full bg-gray-50 border-l border-gray-200 p-4">
              <div className="text-sm font-medium text-gray-900 mb-4">Design</div>
              <div className="space-y-2">
                <div className="aspect-[16/9] bg-white border border-gray-200 rounded-lg shadow-sm"></div>
                <div className="aspect-[16/9] bg-blue-50 border border-blue-200 rounded-lg shadow-sm"></div>
                <div className="aspect-[16/9] bg-green-50 border border-green-200 rounded-lg shadow-sm"></div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      {/* Status Bar */}
      <StatusBar onToggleNotes={() => setShowNotes(!showNotes)} showNotes={showNotes} />
    </div>
  )
}