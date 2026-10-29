import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Sermons from './pages/Sermons'
import Give from './pages/Give'
import Contact from './pages/Contact'
import GetInvolved from './pages/GetInvolved'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="give" element={<Give />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-involved" element={<GetInvolved />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
