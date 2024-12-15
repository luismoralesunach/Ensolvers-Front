import { Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login'
import { NotesHome } from './pages/NotesHome'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/notes' element={<NotesHome/>}/>
      </Routes>
    </div>
  )
}

export default App
