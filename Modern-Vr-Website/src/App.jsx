import './App.css'
import {Header, Footer, Home, About, Services} from './components/index'

function App() { 

  return (
    <div className='px-[15rem]'>
      <Header/>
      <Home/>
      <About/>
      <Services/>
    </div>
  )
}

export default App
