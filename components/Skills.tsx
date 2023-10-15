import Link from 'next/link';
import {ImHtmlFive2, ImCss3} from 'react-icons/im';
import {TbBrandJavascript, TbBrandRedux, TbBrandNextjs} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';

type Props = {};

const Skills = (props: Props) => {
    return <div className="w-10/12 mx-auto mt-10">
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10">Skills</h1>
        <div className="flex msx-md:flex-wrap gap-7 justify-between">
            <div className="d p-5 relative overflow-hidden mt-5">
                <div className="flex justify-center mt-4">
                    <ImHtmlFive2 size={28} className=' text-pink-500'/>
                </div>
                <h1 className="text-center mt-5">HTML</h1>
            </div>
            <div className="d p-5 relative overflow-hidden mt-5">
                <div className="flex justify-center mt-4">
                    <ImCss3 size={28} className=' text-pink-500'/>
                </div>
                <h1 className="text-center mt-5">CSS</h1>
            </div>
            <div className="d p-5 relative overflow-hidden mt-5">
                <div className="flex justify-center mt-4">
                    <TbBrandJavascript size={28} className=' text-pink-500'/>
                </div>
                <h1 className="text-center mt-5">JavaScript</h1>
            </div>
            <div className="d p-5 relative overflow-hidden mt-5">
                <div className="flex justify-center mt-4">
                    <FaReact size={28} className=' text-pink-500'/>
                </div>
                <h1 className="text-center mt-5">React</h1>
            </div>
            <div className="d p-5 relative overflow-hidden mt-5">
                <div className="flex justify-center mt-4">
                    <TbBrandRedux size={28} className=' text-pink-500'/>
                </div>
                <h1 className="text-center mt-5">Redux</h1>
            </div>
            <div className="d p-5 relative overflow-hidden mt-5">
                <div className="flex justify-center mt-4">
                    <TbBrandNextjs size={28} className=' text-pink-500'/>
                </div>
                <h1 className="text-center mt-5">Next JS</h1>
            </div>
        </div>
    </div>
}

export default Skills;