import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import SideBar from './component/SideBar'
import Hero from './component/Hero'
function App() {

  return (
    <>
     <Navbar />
     <div className="layout">
        <SideBar />
        <Hero />
      </div>
     <Footer />
    </>
  )
}

export default App
