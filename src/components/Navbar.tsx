import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Navbar = () => {
  const urlPath: string = useRouter().pathname

  const ur: string[] = ['home',  'about']

  return (
    <nav className='flex w-full justify-between items-center uppercase py-3 bg-transparent px-2'>
      <div className='text-xl font-semibold'>
        <Link href={'/'}><span className='text-lime-400'>hero</span>phumi</Link>
      </div>
      <ul className='flex space-x-1 text-sm font-semibold tracking-wide'>
        {
          ur.map((na, i) => (
            <li key={+i}>
              <Link href={na === 'home' ? '/' : na} className={ urlPath === '/' && na === 'home' ? 'text-lime-400 border-lime-400 border px-2 rounded-sm py-0.5 pb-1' : urlPath === '/' + na ? 'text-lime-400 border-lime-400 border px-2 rounded-sm py-0.5 pb-1' : 'px-2' } style={{ '--h': +i } as React.CSSProperties } id={'menubar'}>{na}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar;