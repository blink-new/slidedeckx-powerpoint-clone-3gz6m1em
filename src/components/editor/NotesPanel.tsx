import React from 'react'

export function NotesPanel() {
  return (
    <div className="h-full bg-white border-t border-gray-200 flex flex-col">
      <div className="px-4 py-2 border-b border-gray-200">
        <div className="text-sm font-medium text-gray-900">Notes</div>
      </div>
      
      <div className="flex-1 p-4">
        <textarea
          className="w-full h-full resize-none border-0 outline-none text-sm text-gray-700 placeholder-gray-400"
          placeholder="Click to add notes..."
          defaultValue=""
        />
      </div>
    </div>
  )
}