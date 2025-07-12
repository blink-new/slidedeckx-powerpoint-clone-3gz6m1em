import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  FileText, 
  Plus, 
  FolderOpen, 
  Template, 
  Cloud, 
  Settings, 
  User,
  Search
} from 'lucide-react'
import { Input } from '@/components/ui/input'

export function StartPage() {
  const navigate = useNavigate()

  const recentFiles = [
    { name: "Q4 Business Review.pptx", lastModified: "2 hours ago", thumbnail: "/api/placeholder/160/120" },
    { name: "Product Launch.pptx", lastModified: "Yesterday", thumbnail: "/api/placeholder/160/120" },
    { name: "Team Meeting.pptx", lastModified: "3 days ago", thumbnail: "/api/placeholder/160/120" },
  ]

  const templates = [
    { name: "Blank Presentation", description: "Create from scratch", thumbnail: "/api/placeholder/160/120" },
    { name: "Business Pitch", description: "Professional template", thumbnail: "/api/placeholder/160/120" },
    { name: "Academic Report", description: "Educational layout", thumbnail: "/api/placeholder/160/120" },
    { name: "Marketing Plan", description: "Modern design", thumbnail: "/api/placeholder/160/120" },
  ]

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-semibold text-gray-900">SlideDeckX</div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <FolderOpen className="w-4 h-4 mr-2" />
              Open
            </Button>
            <Button variant="ghost" size="sm">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search presentations..." 
              className="pl-10 w-80"
            />
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Create New Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create new</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-lg transition-shadow group"
                  onClick={() => navigate('/editor')}
                >
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg flex items-center justify-center">
                      {index === 0 ? (
                        <Plus className="w-12 h-12 text-blue-400" />
                      ) : (
                        <div className="w-full h-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                          <Template className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                        {template.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {template.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Files Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentFiles.map((file, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-lg transition-shadow group"
                  onClick={() => navigate('/editor')}
                >
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 truncate">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {file.lastModified}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}