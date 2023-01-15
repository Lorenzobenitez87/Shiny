import React from 'react'
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

const root = createRoot(document.getElementById( 'root' ))

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/survey/:questionNumber" element={<Survey />} />

            <Route path="/results" element={<Results />} />

            <Route path="/freelances" element={<Freelances />} />

            <Route path="/profile/:id" element={ <Profile />} />

            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
