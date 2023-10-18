"use client";
import { AiOutlineGithub } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export interface ContainerProps {}

export const Container = (props: ContainerProps) => {
  const [text] = useTypewriter({
    words: ["My name is George", "And I'm a Frontend developer"],
    typeSpeed: 140,
  });

  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto h-[860px]">
      <div className="md:flex items-center justify-between flex-row-reverse mt-30">
        <div className="flex justify-end items-end max-md:pt-4">
          <div className="h-[370px]">
            <Image
              className="rounded-[10px] transform -scale-x-100 sm:w-[400px]"
              width={400}
              height={330}
              src="/hero.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="p-4 pl-0 mt-5 sm:mt-20">
          <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
            Hello!
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 lg:pt-6">
            {text}
            <Cursor />
          </h1>
          <p className="text-base sm:text-xl md:text-base lg:test-xl xl:text-2xl lg-pt-6 pt-2">
            bringing imagination to live website
          </p>
          <div className="flex items-center mt-6 md:mt-14">
            <ul className="flex items-center space-x-2 sm:space-x-5 mr-6 my-4">
              <li>
                <Link
                  href={"https://github.com/GrudTrigger"}
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <AiOutlineGithub size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"tg://resolve?domain=George_Murashov"}
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <LiaTelegram size={24} />
                </Link>
              </li>
            </ul>
            <Link
              href={"mailto:goshkamurzik@yandex.ru"}
              className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
