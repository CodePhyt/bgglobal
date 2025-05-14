import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Horti from './pages/Horti';
import Climate from './pages/Climate';
import Energy from './pages/Energy';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Contact from './pages/Contact';

// Components
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/horti" element={<Horti />} />
            <Route path="/solutions/climate" element={<Climate />} />
            <Route path="/solutions/energy" element={<Energy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
