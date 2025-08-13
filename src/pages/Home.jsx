import Header from '../component/header'
import Subheader from '../component/subheader'
import Main from '../component/main'
import Footer from '../component/footer'

export default function Home(){
    return (
    <div className=' min-h-screen bg-white text-slate-800 ' >
      <Header/>
      <Subheader/>
      <main className='mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 '>
      <Main/>
      </main>
      <Footer/>
    </div> 
    )
}