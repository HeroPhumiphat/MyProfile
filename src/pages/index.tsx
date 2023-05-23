import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

type objectProject = {
  projectname: string,
  view: string,
  image: string,
  code: string
}

export default function Home() {
  const router = useRouter();

  let textArr: string[] = [
    'Developer',
    'Front-End'
  ]

  const [text, setText] = React.useState<string[]>(textArr)
  const [textShow, setTextShow] = React.useState<string>('')
  let [index, setIndex] = React.useState<number>(0)
  const textRef = React.useRef<HTMLParagraphElement>(null)

  const [positionScroll, setPositionScroll] = React.useState<number>(0)

  const box1 = React.useRef<HTMLDivElement>(null)
  const box2 = React.useRef<HTMLDivElement>(null)
  const box3 = React.useRef<HTMLDivElement>(null)
  const boxImage = React.useRef<HTMLDivElement>(null)
  const [positionBox1, setPositionBox1] = React.useState<number>(0)
  const [positionBox2, setPositionBox2] = React.useState<number>(0)

  React.useEffect(() => {
    setTextShow((text[0]))
  }, [])

  const timer = 3500

  function animateText() {
    setTimeout(function() {
      if (textRef.current) {
        textRef.current.classList.remove("text-in");
        textRef.current.classList.add("text-out");
        textRef.current.classList.remove("show");
      }
    }, timer - 300)
    setTimeout(function() {
      if (textRef.current) {
        textRef.current.classList.remove('text-out')
        textRef.current.classList.add('text-in')
        textRef.current.classList.add('show')
      }
    }, timer + 180)

    setTimeout(function() {
      setIndex(++index)

      setTextShow(text[index%(text.length)])
    }, timer)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY) {
        setPositionScroll(window.scrollY);
      }
    })

    if (box1.current?.offsetTop) {
      setPositionBox1(box1.current.offsetTop-100)
    }
    
    if (box2.current?.offsetTop) {
      setPositionBox2(box2.current.offsetTop-100)
    }
  })

  React.useMemo(() => {
    animateText()
  }, [textShow])


  // portfolio
  const portfolio: objectProject[] = [
    {
      projectname: 'simple shop (redux-toolkit)',
      view: 'https://herophumiphat-demo-shop.netlify.app/',
      image: 'p1-3.png',
      code: 'https://github.com/HeroPhumiphat/react-redux-toolkit'
    },
    {
      projectname: 'simple connect mongodb',
      view: '',
      image: 'p2-2.png',
      code: 'https://github.com/HeroPhumiphat/nextjs-express'
    }, {
      projectname: 'simple calculate solarcell',
      view: 'https://thriving-biscochitos-c8896a.netlify.app/',
      image: 'p3-1.png',
      code: 'https://github.com/HeroPhumiphat/calculate-solar-details'
    }
  ]

  const onClickBtnView = (path: string) => {
    if (path.length > 1) {
      router.push(path)
    }
  }

  return (
    <div>
      <Head>
        <title>หน้าหลัก | Herophumi</title>
      </Head>
      <main className='w-full px-8 lg:px-32 py-2'>
      <div className='absolute top-16 left-0 w-full h-[700px]'>
        <div className='bg1 absolute -top-[400px] -right-80 w-[1000px] h-[1000px] opacity-100 brightness-200 contrast-75 rounded-full -z-30 blur-xl border ' style={{backgroundImage: "url('/pexels-pixabay-247676.jpg')", backgroundSize: '180%', backgroundPosition: 'center'}}></div>
      </div>
      <div className='absolute animate-ping w-12 h-12 bg-gradient-to-br to-lime-500 from-blue-500 top-[80px] right-[60px] rounded-full opacity-70'></div>
      <div className='absolute w-16 h-16 bg-gradient-to-br to-lime-500 from-blue-500 top-[73px] right-[52px] rounded-full opacity-80'></div>
      <div className='fixed bottom-5 left-4 z-50'>
        <div className='flex items-center cursor-pointer' onClick={() => window.scrollTo(0, 0)}>
          <a href="#" className='flex items-center'>
            <div className={positionScroll < positionBox1 ? 'h-2.5 w-2.5 bg-lime-400 rounded-full mr-2' : 'h-2.5 w-2.5 bg-white rounded-full mr-2'}></div>
            <p className={positionScroll < positionBox1 ? 'text-lime-300 text-sm transition translate-x-1 duration-500 font-semibold' : 'text-sm transition translate-x-0 duration-500'}>Start</p>
          </a>
        </div>
        <div className='h-1.5 my-1 w-1.5 ml-0.5 bg-white rounded-full'></div>
        <div className='flex items-center cursor-pointer'>
          <a href="#profile" className='flex items-center'>
            <div className={positionScroll >= positionBox1 && positionScroll < positionBox2  ? 'h-2.5 w-2.5 bg-lime-400 rounded-full mr-2' : 'h-2.5 w-2.5 bg-white rounded-full mr-2'}></div>
            <p className={positionScroll >= positionBox1 && positionScroll < positionBox2 ? 'text-lime-300 text-sm transition translate-x-1 duration-500 font-semibold' : 'text-sm transition translate-x-0 duration-500'}>Profile</p>
          </a>
        </div>
        <div className='h-1.5 my-1 w-1.5 ml-0.5 bg-white rounded-full'></div>
        <div className='flex items-center cursor-pointer'>
          <a href="#portfolio" className='flex items-center'>
            <div className={positionScroll >= positionBox2 ? 'h-2.5 w-2.5 bg-lime-400 rounded-full mr-2' : 'h-2.5 w-2.5 bg-white rounded-full mr-2'}></div>
            <p className={positionScroll >= positionBox2 ? 'text-lime-300 text-sm transition translate-x-1 duration-500 font-semibold' : 'text-sm transition translate-x-0 duration-500'}>Portfolio</p>
          </a>
        </div>
      </div>
        <div className='relative h-[650px] flex justify-between items-center pb-16 max-w-[1000px] mx-auto'>
          <div className='text-center w-full md:w-fit'>
            <h1 className='text-5xl tracking-tight' style={{ textShadow: '0px 0px 1px #3e3e3e' }}>Hi!, I&apos;m <span className='text-lime-400 uppercase font-semibold'>Hero</span><span className='uppercase'>Phumi</span></h1>
            <div className='pt-2 flex justify-center md:justify-start items-center'>
              <div className='ml-1.5'>
                <p className='text-2xl underline underline-offset-4'>I would like to be a </p>
              </div>
              <div className='test-text w-[150px] text-start ml-2 mt-2 py-2 text-3xl font-semibold overflow-hidden'>
                <p className='inline-block show text-in text-red-200' ref={textRef}>{textShow}</p>
              </div>
            </div>
            <div className='flex justify-center md:justify-start'>
              <p className='w-[400px] mt-5 text-center md:text-start md:ml-2'>สวัสดีครับ, ผมชื่อ<span className='text-blue-200'>ภูมิพัฒน์</span>
                ตอนนี้กำลังหางาน Developer
                <br/><span>ผมมีความสนใจในการสร้าง<span className='text-lime-300'>เว็ปแอปพลิเคชั่น</span>ครับ
                </span>
              </p>
            </div>
            <div className='mt-10 text-center md:text-start'>
              <a href='/Resume.pdf' download className='border py-4 px-6 rounded-full hover:underline text-lg'>Download Resume.PDF <FontAwesomeIcon icon={faFileArrowDown} className='text-white ml-2 text-2xl' /> </a>
            </div>
          </div>
          <div className='boxImage relative w-64 h-96 hidden md:inline-block rounded-xl brightness-90 hue-rotate-15 contrast-75 saturate-100 bg-black bg-opacity-50 rotate-6' style={{ boxShadow: '0px 0px 4px #c3d5a7'}}>
            <div className='imageShow w-full absolute top-2 -left-3 -rotate-3 h-full absoluteopacity-100 rounded-xl' style={{backgroundImage: "url('/S__35332099.jpg')", backgroundSize: '80%', backgroundPosition: 'center', boxShadow: '0px 0px 6px #c3d5a7'}} ref={boxImage}></div>
            <div className='absolute -top-3 left-12 bg-gradient-to-r from-transparent via-white via-50% to-transparent w-full opacity-40' style={{height: 0.8}}></div>
            <div className='absolute -bottom-6 -left-20 bg-gradient-to-r from-transparent via-white via-50% to-transparent w-7/12 opacity-40' style={{height: 0.8}}></div>
            <div className='absolute -bottom-16 -left-7 bg-gradient-to-b from-transparent via-white via-50% to-transparent h-32 opacity-40' style={{width: 0.8}}></div>
            <div className='absolute -top-10 -right-4 bg-gradient-to-b from-transparent via-white via-50% to-transparent h-32 opacity-40' style={{width: 0.8}}></div>
          </div>
          <div className='absolute bottom-0 w-full flex flex-col items-center justify-center'>
            <a href="#profile" className='flex flex-col items-center'>
              <div className='boxArrow text-center border-2 rounded-full w-16 pt-10 pb-6 cursor-pointer transition duration-1000 hover:border-lime-200 hover:text-lime-300' style={{ boxShadow: '0px 0px 10px #333' }}>
                <FontAwesomeIcon icon={faArrowDown} className='text-4xl animate-bounce' />
              </div>
              <div className='aar bg-white w-[6px] h-[6px] rounded-full mt-2 mr-0.5' style={{marginLeft: 2}}></div>
              <div className='bg-white w-1 h-1 rounded-full my-1.5'></div>
            </a>
          </div>
        </div>

        <div className='h-[100px]'></div>
        <div className='pt-20 pb-12 text-center max-w-[800px] mx-auto' id="profile" ref={box1}>
          <h1 className='text-5xl font-extrabold uppercase mb-12'><span className='text-lime-400'>Pro</span>file</h1>
          <div className='flex items-center md:items-start md:justify-between flex-col-reverse md:flex-row'>
            <div>
              <div className='hidden md:flex'>
                <p className='uppercase text-3xl font-bold underline underline-offset-8 decoration-2'><span className='text-lime-400'>hero</span>phumiphat</p>
                <p className='text-lime-400 lowercase text-3xl font-extrabold'>--|</p>
              </div>
              <div className='mt-8 md:text-start ml-6 text-center'>
                <p className='uppercase'><span className='text-lime-400 uppercase'>name : </span>Phumiphat Meemano</p>
                <p className=''><span className='text-lime-400 uppercase'>github : </span><a href='https://github.com/HeroPhumiphat' className='hover:underline underline-offset-2'>github.com/HeroPhumiphat</a></p>
                <p className=''><span className='text-lime-400 uppercase'>email : </span>Herophumiphat639@gmail.com</p>
                <p className=''><span className='text-lime-400 uppercase'>Tel : </span>(+66) 97-181-0648</p>

                <div className='mt-4'>
                  <p className='uppercase underline underline-offset-4 font-semibold text-blue-400'>Education</p>
                  <p className='ml-4'><span className='text-red-300'>Bachelor of Engineering </span>(Electrical Engineering)</p>
                  <p className='ml-4'><span className='text-red-300'>2017 to 2020 </span>Phayao University</p>
                </div>

                <div className="mt-4">
                  <p className='uppercase underline underline-offset-4 text-blue-400 font-semibold'>certificate</p>
                  <div className='md:ml-4'>
                    <p className='mt-2 text-red-300'>Issued by SkillLane</p>
                    <ul className='md:list-disc text-sm mt-1 md:ml-5'>
                      <li>TypeScript on 20 November 2022</li>
                      <li>Git and GitHub on 14 October 2022</li>
                      <li>JavaScript and Node.js on 6 October 2022</li>
                    </ul>
                    <p className='mt-2 text-red-300'>Issued by BorntoDev</p>
                    <ul className='md:list-disc text-sm mt-1 md:ml-5'>
                      <li>Essendtail SQL for Everyone on 17 December 2021</li>
                      <li>Introduction to Computer Science on 12 December 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-fit mr-0 md:mr-20 mb-8 md:top-12'>
              <a href="https://github.com/HeroPhumiphat">
                <div className='w-40 h-40 bg-white p-8 rounded-full z-30' style={{boxShadow: '0 0 10px #a3e635'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                </div>
              </a>
              <div className='absolute top-6 right-6 w-28 h-28 bg-white p-5 rounded-full animate-ping -z-20 opacity-40'></div>
            </div>
          </div>
        </div>
        <div className='pt-20 pb-12 text-center max-w-[800px] mx-auto' id="portfolio" ref={box2}>
          <h1 className='text-5xl font-extrabold uppercase mb-12'><span className='text-lime-400'>Port</span>folio</h1>
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 min-[580px]:grid-cols-2 min-[860px]:grid-cols-3 gap-5'>
              {
                portfolio.map((doc, index) => (
                  <div className='w-fit mb-4' key={index}>
                    <div className='relative border mx-2 max-w-[230px] w-[230px] h-[300px] flex items-center rounded-sm overflow-hidden' style={{backgroundImage: `url('${doc.image}')`, backgroundSize: '100%', backgroundPosition: 'center', boxShadow: '0px 0px 6px #c3d5a7'}}>i
                      <div className='-rotate-6 text-center w-full flex justify-center'>
                        <div className='ml-2 text-center w-[300px] uppercase bg-opacity-80 text-lg font-bold bg-neutral-800 '>
                          <p className='w-[230px] mx-auto'>{doc.projectname} </p> 
                        </div>
                      </div>
                    </div>
                    <div className='w-[240px] mt-4 pl-2 flex flex-wrap space-x-3'>
                      {/* <Link href={'/project/' + (index + 1)} className='bg-lime-600 hover:bg-lime-700 w-fit px-3 rounded-md py-1'>Example</Link> */}
                      <Link href={doc.code} className='bg-blue-600 hover:bg-blue-700 w-fit px-3 rounded-md py-1'>code</Link>
                      <button className={doc.view.length < 1 ? 'bg-amber-900 cursor-not-allowed w-fit px-3 rounded-md py-1' : 'bg-amber-500 hover:bg-amber-600 w-fit px-3 rounded-md py-1'} disabled={doc.view.length < 1 ? true : false } onClick={() => onClickBtnView(doc.view)}>view</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='relative h-[100px] max-w-[800px] mx-auto'>
          <p className='absolute w-full bottom-2 text-center herophumiphat'>copyright © 2023 by herophumiphat</p>
        </div>
      </main>
    </div>
  )
}
