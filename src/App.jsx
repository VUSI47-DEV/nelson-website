import './App.css'
import Navigation from './components/Navigation'
import { Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {

  return (
    <div className="">
      {/* <Navigation/> */}
      <Routes>
        <Route path = '*' element={<Navigation/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
