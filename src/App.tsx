import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PresentationEditor } from './components/PresentationEditor'
import { StartPage } from './components/StartPage'
import { SlideSorterView } from './components/SlideSorterView'
import { PresenterView } from './components/PresenterView'

function App() {
  return (
    <Router>
      <div className="h-screen w-full bg-background font-sans overflow-hidden">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/editor" element={<PresentationEditor />} />
          <Route path="/sorter" element={<SlideSorterView />} />
          <Route path="/presenter" element={<PresenterView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App