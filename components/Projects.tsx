import { BsArrowUpRight} from 'react-icons/bs'
import Image from 'next/image';
import Link from 'next/link';

type Props = {};
const Projects = (props: Props) => {
   

    return <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Projects</h1>
        <p className='pt-6 text-neutral-300'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis architecto obcaecati porro quas quae repellendus fugit. Quam dolore vel nam tempora reiciendis quas, at voluptatum numquam sint temporibus repellat suscipit!
        </p>
        <div className='mt-20 md:w-9/12 mx-auto'>
            <Image className='rounded-xl opacity-95 hover:opacity-100' src='/calendar.png' alt='Project' width={1200} height={400}/>
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Calendar</h2>
                <p className = 'text-neutral-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero veniam, alias repellat quos vel soluta impedit molestiae! In laudantium repellat dignissimos, assumenda molestiae consectetur beatae possimus illo, nemo, dolore aperiam?</p>
                <div className='mt-6 inline-block'>
                    <Link href={'#'} className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600'>
                        Exlore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </Link>
                </div>
            </div>
        </div>

        <div className='mt-20 md:w-9/12 mx-auto'>
            <Image className='rounded-xl opacity-95 hover:opacity-100' src='/crm.png' alt='Project' width={1200} height={400}/>
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Mini CRM</h2>
                <p className = 'text-neutral-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero veniam, alias repellat quos vel soluta impedit molestiae! In laudantium repellat dignissimos, assumenda molestiae consectetur beatae possimus illo, nemo, dolore aperiam?</p>
                <div className='mt-6 inline-block'>
                    <Link href={'#'} className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600'>
                        Exlore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </Link>
                </div>
            </div>
        </div>

        <div className='mt-20 md:w-9/12 mx-auto'>
            <Image className='rounded-xl opacity-95 hover:opacity-100' src='/calendar.png' alt='Project' width={1200} height={400}/>
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Films</h2>
                <p className = 'text-neutral-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero veniam, alias repellat quos vel soluta impedit molestiae! In laudantium repellat dignissimos, assumenda molestiae consectetur beatae possimus illo, nemo, dolore aperiam?</p>
                <div className='mt-6 inline-block'>
                    <Link href={'#'} className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600'>
                        Exlore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>

}


export default Projects