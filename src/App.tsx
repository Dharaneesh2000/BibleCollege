import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BrowseCourses from './pages/BrowseCourses'
import BachelorOfTheology from './pages/BachelorOfTheology'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<BrowseCourses />} />
          <Route path="/academics/bachelor-of-theology" element={<BachelorOfTheology />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
