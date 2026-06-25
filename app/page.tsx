import { OS } from '../src/views/OS'
import { Main } from '../src/views/Main'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import './page.module.css'

// This is the entry point for the app. We will use <Main /> as our parent component,
// so you shouldn't need to make any change in this file

export default function Home() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/OS" element={<OS />} />
        </Routes>
      </main>
    </Router>
  )
}
