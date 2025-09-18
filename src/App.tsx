import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />

        {/* 👇 Catch-all route for unknown paths */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App