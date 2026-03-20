import {Routes, Route} from 'react-router-dom'
import GrammyPage from './GrammyPage'
import NominationPage from './NominationPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GrammyPage />} />
      <Route path="/nominaciones" element={<NominationPage />} />
    </Routes>
  )
}

export default App