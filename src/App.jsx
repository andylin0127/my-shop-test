import './App.css'
import Header from './component/header'
import Subheader from './component/subheader'
import Main from './component/main'
import Footer from './component/footer'

function App() {
  return (
  <div className=''>  
    <div className=' flex flex-col ' >
      <Header/>
      <Subheader/>
      <main className='flex-1 flex'>
      <Main/>
      </main>
      <Footer/>
    </div>
  </div>  
  )
}

export default App
