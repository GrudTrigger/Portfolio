import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


export default function Home() {
  return (
    <div>
      <div className='w-10/12 mx-auto pt-4'>
        <Navbar/>
      </div>
      <Container/>
      <div className='border-t-2 w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]'></div>
      <Skills/>
      <div className='border-t-2 w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]'></div>
      <Projects/>
    </div>
  )
}
