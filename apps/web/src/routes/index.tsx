import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CardPage } from '../features/card/CardPage'
import { drAlexandre } from '../data/doctors/dr-alexandre'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dr-alexandre" element={<CardPage data={drAlexandre} />} />
      </Routes>
    </BrowserRouter>
  )
}
