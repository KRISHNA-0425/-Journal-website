import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AimScope from './pages/AimScope'
import EditorialBoardPage from './pages/EditorialBoardPage'
import SubmitPage from './pages/SubmitPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ color: 'var(--text)' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aim-scope" element={<AimScope />} />
            <Route path="/editorial-board" element={<EditorialBoardPage />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
