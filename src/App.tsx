import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/blog/:slug" element={<ProjectPage />} />

        {/* 👇 Catch-all route for unknown paths */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App