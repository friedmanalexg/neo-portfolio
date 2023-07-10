'use client';

import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Image from "next/image";
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import { useState } from 'react';


export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio: Alex G Friedman</title>
        <meta name="description" content="Generated by create react app lol"></meta>
        <link rel='icon' href="favicon.ico" />
      </Head>
      <main className='bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='dark:text-white py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white text-gray-800'>Alex Friedman codes</h1>
            <ul className='flex items-center'>
              <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-white text-gray-800'/></li>
              <li> <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
              <li> <a href='/blog' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Blog</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 dark:text-teal-400 text-teal-600 font-medium md:text-6xl'>Alex G Frieman</h2>
            <h3 className='text-2xl py-2 md:text-3xl text-gray-800 dark:text-white'>Developer and Writer</h3>
            <p className='tx-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>Experienced in Ruby on Rails and JavaScript-based programming and a background in higher education. 
Solution oriented, creative approach to app design with a focus on delivering users an intuitive interactive experience.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href='https://github.com/friedmanalexg'><AiFillGithub /></a>
            <a href='https://www.linkedin.com/in/alex-friedman-codes/'><AiFillLinkedin /></a>
          </div>
          <div style={{position:"relative"}} className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={deved} fill style={{objectFit: "cover"}} />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white text-gray-800'>Services I offer</h3>
            <p className='tx-md py-5 leading-8 text-gray-800 dark:text-gray-200'>I'm just some placeholder text. Lorem Ipsum or whatever. Stop reading this.</p>
            <p className='tx-md py-5 leading-8 text-gray-800 dark:text-gray-200'>I'm just some placeholder text. Lorem Ipsum or whatever. Stop reading this.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg rounded-xl p-10 my-10 dark:bg-white flex-1'>
              <Image src={design} width={100} height={100}/>
              <h3 className='tx-lg font-medium pt-8 pb-2'>Basically Servicable Designs</h3>
              <p className='py-2'>blah blah blah yackity schmackity. </p>
              <h4 className='text-teal-600 py-4'> design tools i use</h4>
              <p className='text-gray-800 py-1'>Example</p>
              <p className='text-gray-800 py-1'>Example</p>
              <p className='text-gray-800 py-1'>Example</p>
            </div>
            <div className='text-center shadow-lg rounded-xl p-10 my-10 dark:bg-white flex-1'>
              <Image src={code} width={100} height={100}/>
              <h3 className='tx-lg font-medium pt-8 pb-2'>Basically Servicable Designs</h3>
              <p className='py-2'>blah blah blah yackity schmackity. </p>
              <h4 className='text-teal-600 py-4'> design tools i use</h4>
              <p className='text-gray-800 py-1'>Example</p>
              <p className='text-gray-800 py-1'>Example</p>
              <p className='text-gray-800 py-1'>Example</p>
            </div>
            <div className='text-center shadow-lg rounded-xl p-10 my-10 dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='tx-lg font-medium pt-8 pb-2'>Basically Servicable Designs</h3>
              <p className='py-2'>blah blah blah yackity schmackity. </p>
              <h4 className='text-teal-600 py-4'> design tools i use</h4>
              <p className='text-gray-800 py-1'>Example</p>
              <p className='text-gray-800 py-1'>Example</p>
              <p className='text-gray-800 py-1'>Example</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-gray-800">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>  
  );
}
