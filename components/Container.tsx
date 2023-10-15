import {AiOutlineGithub} from 'react-icons/ai';
import {LiaTelegram} from 'react-icons/lia';
import Image from 'next/image';
import Link from 'next/link';


export interface ContainerProps {
}

export const Container = (props: ContainerProps) => {
  return (
    <div className='lg:pt-16 pt-4 relative w-10/12 mx-auto h-[870px]'>
      <div className='md:flex items-center justify-between flex-row-reverse'>
        <div className='flex justify-end items-end max-md:pt-4'>
          <div className='relative'>
            <Image className='rounded-full' width={200} height={200} src="/hero.jpg" alt="Hero Image" />
            <div className='w-[120%] overflow-hidden h-[150%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400  absolute'></div>
          </div>
        </div>
        <div className='p-4 pl-0 mt-5 sm:mt-20'>
          <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>Hello</p>
          <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6'>I&apos;m Satender
            <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>A Front End Developer</p>
          </h1>
          <p className='text-base sm:text-xl md:text-base lg:test-xl xl:text-2xl lg-pt-6'>bringing imagination to live website</p>
          <div className='flex items-center mt-6 md:mt-14'>
            <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4'>
              <li><Link href={'#'} className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineGithub size={24}/></Link></li>
              <li><Link href={'#'} className='hover:opacity-100 opacity-75 transition ease-in duration-150'><LiaTelegram size={24}/></Link></li>
            </ul>
            <Link href={"mailto:goshkamurzik@yandex.ru"} className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container
