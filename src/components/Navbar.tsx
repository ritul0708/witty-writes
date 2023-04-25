import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex item-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          {/* <Image src="/logo.png" height={35} width={40} /> */}
          <span className="font-bold ml-2 text-primary">
            Witty Writes
          </span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Pricing</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Docs</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Company</a>
        </li>
      </ul>

      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-gray-600'>
          <a href="#" className='hover:text-gray-400'>Log In</a>
        </li>
        <li className='font-medium text-gray-600'>
          <a href="#" className='bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all'>Sign Up</a>
        </li>
      </ul>
    </nav>
          
  )
}

export default Navbar