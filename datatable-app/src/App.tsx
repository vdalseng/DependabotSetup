import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'


function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default App
