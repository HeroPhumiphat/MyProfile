import React from 'react';
import { useRouter } from 'next/router';
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const urlPath: string = useRouter().pathname

  const styleBackground = {
    backgroundImage: `url('/pexels-eberhard-grossgasteiger-1366921.jpg')`, backgroundSize: 'cover',
    backgroundPositionY: '-100px'
  }
  return (
    <div className="relative h-fit">
      {/* <div className='absolute top-40  right-60 w-[500px] bg-lime-400 rotate-[125deg]' style={{height: 0.8}}></div> */}
      {/* <div className='w-full h-fit absolute left-0 top-0 opacity-80 -z-20'>
        <div className='left-0 top-0 w-full h-[950px] z-10' style={styleBackground}></div>
        <div className="absolute -bottom-0 z-20 bg-gradient-to-b from-transparent from-20% via-transparent/60 via-60% to-neutral-900 w-full h-[320px]"></div>
        <div className="absolute -bottom-0 z-20 bg-gradient-to-b from-transparent from-20% via-transparent/20 via-60% to-neutral-900 w-full h-[320px]"></div>
        <div className="fog absolute -top-5 left-0 w-[800px] h-[600px] opacity-50" style={{backgroundImage: `url('/—Pngtree—cloud mountain fog cover white_5469718.png')`, backgroundSize: 'cover', backgroundPosition: 'center', '--i': 1 } as React.CSSProperties}></div>
        <div className="fog absolute top-32 left-0 w-[800px] h-[600px] opacity-40" style={{ backgroundImage: `url('/—Pngtree—cloud mountain fog cover white_5469718.png')`, backgroundSize: 'cover', backgroundPosition: 'center', '--i': 2 } as React.CSSProperties}></div>
        <div className="fog absolute top-80 left-0 w-[800px] h-[600px] opacity-30" style={{ backgroundImage: `url('/—Pngtree—cloud mountain fog cover white_5469718.png')`, backgroundSize: 'cover', backgroundPosition: 'center', '--i': 1.2 } as React.CSSProperties}></div>
      </div> */}
      {/* <div className='bgTe absolute w-40 h-40 bg-gradient-to-br to-red-500 from-blue-500 top-[420px] left-72 rounded-full'></div> */}
      <div className="z-30">
        <div className='fixed top-0 left-0 w-full z-50 bg-gradient-to-r to-neutral-900 via-transparent from-neutral-900'>
          <Navbar />
        </div>
        <div className='h-16 w-full'></div>
        <main className='z-30'>{children}</main>
      </div>
    </div>
  )
}