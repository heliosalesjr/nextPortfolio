import Head from "next/head"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import heliogiraffe from "../public/heliogiraffe 1.png"
import Image from "next/image"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
//https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/pages/index.js

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className=" min-h-screen">

          <nav className=" py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl font-extrabold">heliosalesjr</h1>
          

            <ul className="flex items-center">
              <li><BsFillMoonStarsFill /></li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hélio Sales Jr.
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and game designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I'm a developer and game designer based in Brazil, trying to build a better web byte by byte.  
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={heliogiraffe} alt="Helio and a Giraffe" layout="fill" objectFit="cover" />
            </div>
          </div>
          
        </section>

        <section>  {/* Second section*/}
          <div>

            <h3 className="text-3xl py-1 dark:text-white">What I do</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">From the very beginning of my carreer I've been working on interactive 
            <span className="text-teal-500"> educational </span>projects.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I <span className="text-teal-500"> love </span>Front-end development and game designing because I can have a visual feedback in real time as I code.</p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design icon"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="code icon"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="consulting icon"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        
        </section>

      </main>
      
    
    </>
  )
}
